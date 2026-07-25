"use client";

import React, { useEffect, useRef, useState } from "react";

export function ModelViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [rotation, setRotation] = useState({ x: -10, y: 15 });
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  // Mouse Drag Logic for Manual Rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;

    setRotation((prev) => ({
      x: Math.max(-45, Math.min(45, prev.x + deltaY * 0.4)),
      y: prev.y + deltaX * 0.5,
    }));

    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    let animationFrameId: number;
    let scene: any, camera: any, renderer: any, fbxModel: any;

    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => reject();
        document.head.appendChild(script);
      });
    };

    const initThreeFBX = async () => {
      try {
        // Load Three.js, fflate, and FBXLoader from CDN
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js");
        await loadScript("https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/FBXLoader.js");

        const THREE = (window as any).THREE;
        if (!THREE || !THREE.FBXLoader || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const width = canvas.clientWidth || 520;
        const height = canvas.clientHeight || 520;

        // Scene, Camera, Renderer
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, 320);

        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
        scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.6);
        dirLight1.position.set(120, 120, 120);
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0xffb6c1, 0.9);
        dirLight2.position.set(-120, -60, -60);
        scene.add(dirLight2);

        // Textures
        const textureLoader = new THREE.TextureLoader();
        const baseColorTex = textureLoader.load(
          "/models/femmeflo/pad_packaging_3d_model_basecolor.JPEG"
        );
        const normalTex = textureLoader.load(
          "/models/femmeflo/pad_packaging_3d_model_normal.JPEG"
        );
        const roughnessTex = textureLoader.load(
          "/models/femmeflo/pad_packaging_3d_model_roughness.JPEG"
        );

        // Load FBX Model
        const loader = new THREE.FBXLoader();
        loader.load(
          "/models/femmeflo.fbx",
          (object: any) => {
            fbxModel = object;
            fbxModel.traverse((child: any) => {
              if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                  map: baseColorTex,
                  normalMap: normalTex,
                  roughnessMap: roughnessTex,
                  roughness: 0.35,
                  metalness: 0.1,
                });
              }
            });

            // Center and scale model larger
            const box = new THREE.Box3().setFromObject(fbxModel);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 220 / maxDim;

            fbxModel.scale.set(scale, scale, scale);
            fbxModel.position.sub(center.multiplyScalar(scale));

            scene.add(fbxModel);
            setModelLoaded(true);
          },
          undefined,
          (err: any) => {
            console.error("FBX loading error:", err);
          }
        );

        // Render loop
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);
          if (fbxModel) {
            fbxModel.rotation.x = (rotation.x * Math.PI) / 180;
            fbxModel.rotation.y = (rotation.y * Math.PI) / 180;
          }
          renderer.render(scene, camera);
        };
        animate();
      } catch (err) {
        console.error("Three.js setup error:", err);
      }
    };

    initThreeFBX();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [rotation]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      {/* Larger Background Soft Glow Orbs */}
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-pink-400/50 to-rose-300/40 rounded-full blur-3xl top-2 left-2 animate-pulse pointer-events-none" />
      <div className="absolute w-[380px] h-[380px] bg-gradient-to-br from-emerald-400/40 to-green-300/40 rounded-full blur-3xl bottom-2 right-2 animate-pulse pointer-events-none" />

      {/* Larger WebGL Canvas for 3D Model */}
      <canvas
        ref={canvasRef}
        className="w-[460px] h-[460px] sm:w-[520px] sm:h-[520px] relative z-20 drop-shadow-2xl"
      />

      {/* Larger Fallback 3D Box if loading */}
      {!modelLoaded && (
        <div
          className="absolute z-10 transition-transform duration-100 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] relative rounded-2xl shadow-[0_35px_70px_-15px_rgba(0,0,0,0.35)] bg-[#174D32] border border-emerald-500/20 overflow-hidden flex flex-col justify-between p-8">
            <div className="flex justify-between items-start z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAB308]/20 flex items-center justify-center p-1">
                  <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7">
                    <circle cx="32" cy="16" r="6" fill="#FACC15" />
                    <path d="M32 22C24 34 20 46 18 58C28 54 36 54 46 58C44 46 40 34 32 22Z" fill="#4ADE80" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] italic font-bold text-3xl text-white tracking-wide leading-none">
                    Femmeflo
                  </h3>
                  <p className="text-xs text-emerald-200/90 font-light mt-1">
                    Feel fresh feel free
                  </p>
                </div>
              </div>
              <div className="bg-[#E61C5D] text-white font-extrabold text-sm px-3.5 py-1.5 rounded-md shadow-md">
                XL
              </div>
            </div>

            <div className="relative z-10 flex justify-end pr-4 my-auto">
              <div className="w-44 h-24 bg-white rounded-[45px] border-2 border-pink-400 p-2 shadow-xl transform -rotate-12 flex items-center justify-center relative">
                <div className="w-28 h-14 bg-cyan-50 rounded-full border border-cyan-200 flex items-center justify-center">
                  <div className="w-16 h-8 bg-sky-300/80 rounded-full flex items-center justify-center">
                    <div className="w-10 h-4 bg-blue-500/70 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FACC15] -mx-8 -mb-8 px-8 py-3 flex items-center justify-between z-10 border-t border-yellow-400/40">
              <span className="font-extrabold text-zinc-900 text-xl tracking-wider">
                XL
              </span>
              <span className="text-zinc-900 font-bold text-sm tracking-wide">
                sanitary pads
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Petals / Hearts */}
      <div className="absolute top-4 left-4 text-pink-400 text-xl opacity-80 animate-[bounce_4s_infinite] pointer-events-none z-30">
        ♥
      </div>
      <div className="absolute bottom-12 right-6 text-rose-400 text-xl opacity-90 animate-[bounce_5s_infinite] pointer-events-none z-30">
        ♥
      </div>

      {/* Instruction pill */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-zinc-700 font-semibold bg-white/90 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/80 shadow-sm z-30">
        🖱️ Drag to rotate 3D product
      </div>
    </div>
  );
}
