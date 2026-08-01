# 🌸 Femmeflo — Premium Feminine Hygiene & Period Care

A state-of-the-art, high-converting, motion-enhanced FMCG web application for **Femmeflo Extra Large (280mm) Sanitary Pads**. Designed with world-class UI/UX aesthetics, glassmorphism elements, hardware-accelerated animations, and authentic brand storytelling.

---

## ✨ Features & Key Highlights

- 🌸 **Ultra-Refined Brand Logo**: Custom SVG vector filter design with soft golden glow, dual levitating wings animation, and thin white outline for maximum contrast against pastel packaging.
- 🚀 **Global Floating Product Motion**: Fluid 3D-like floating product container (`GlobalFloatingProduct`) synchronized across page scrolling using GSAP ScrollTrigger & Lenis smooth scroll.
- 🇮🇳 **5 Lakh+ Happy Customers Constellation**: Interactive testimonial cloud featuring 12 unique, high-resolution local Indian female customer avatars, floating `♥ Indian Customer` trust badges, and real product packaging.
- ⚡ **Hardware-Accelerated Scroll Revelations**: Smooth `y`-axis and opacity transformations without costly CSS blur recalculations, ensuring 60fps performance on all devices.
- 💎 **Luxury Design System**: Premium color palette (`#FFF0F3`, `#EDF9F3`, `#FDE8EE`), Google Fonts typography (*Plus Jakarta Sans* & *Playfair Display*), and glassmorphism card docks.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & CSS Variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) (ScrollTrigger) |
| **Smooth Scroll** | [@studio-freight/lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or later installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/femmeflo.git
   cd femmeflo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

```
femmeflo/
├── public/                     # Static media & local customer avatar assets
│   ├── femmeflo-withoutbg.png  # Transparent product pack image
│   ├── indian-customer-main.png# Featured center customer holding product box
│   └── avatar-indian-1..12.png # Local high-res Indian customer avatars
├── src/
│   ├── app/                    # Next.js App Router (layout, page, font loaders)
│   ├── components/             # React UI components
│   │   ├── navbar.tsx          # Floating frosted-glass navigation dock
│   │   ├── hero.tsx            # Hero section with CTA & fairy icon
│   │   ├── about.tsx           # Brand story & product highlights
│   │   ├── ProductSection.tsx  # Product specs, absorption core & wing details
│   │   ├── promise.tsx         # Brand promises (Comfort, Freshness, Protection)
│   │   ├── WhyChooseUs.tsx     # Feature comparison & benefits grid
│   │   ├── HappyCustomers.tsx  # Testimonial cloud with 12 Indian avatars
│   │   ├── faq.tsx             # Interactive FAQ accordion
│   │   ├── contact.tsx         # Contact & support section
│   │   ├── footer.tsx          # Footer navigation & social links
│   │   ├── FairyIcon.tsx       # Animated SVG fairy logo with levitation
│   │   ├── GlobalFloatingProduct.tsx # Floating product container
│   │   ├── SmoothScroll.tsx    # Lenis + GSAP ticker synchronization
│   │   └── ScrollReveal.tsx    # Hardware-accelerated scroll reveal wrapper
└── README.md                   # Project documentation
```

---

## 📜 Scripts

- `npm run dev` — Starts the Next.js development server.
- `npm run build` — Builds the optimized production application.
- `npm run start` — Runs the compiled production build locally.
- `npm run lint` — Runs ESLint code quality checks.

---

## 📄 License

This project is proprietary software for **Femmeflo**. All rights reserved.
