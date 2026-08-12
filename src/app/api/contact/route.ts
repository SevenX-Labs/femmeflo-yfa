import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, productQuery, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "sales@femmeflo.in";

    // Format rich HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
        <div style="background-color: #156035; padding: 16px 24px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Query - Femmeflo</h2>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 140px; color: #555555;">Full Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555555;">Email Address:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555555;">Contact / Phone:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111;">${phone || "Not Provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555555;">Product / Query:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #E61C5D; font-weight: bold;">${productQuery || "General Inquiry"}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 16px; background-color: #FAF5F7; border-left: 4px solid #E61C5D; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #E61C5D;">User Message:</p>
          <p style="margin: 0; color: #333333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 24px; text-align: center; color: #888888; font-size: 12px;">
          <p>Submitted via Femmeflo Website Contact Form</p>
        </div>
      </div>
    `;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Femmeflo Web Form" <${smtpUser}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `[Femmeflo Query] ${productQuery || "New Inquiry"} from ${name}`,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: "Email sent successfully via SMTP!" });
    } else {
      // Log for development / fallback mode when SMTP creds are pending
      console.log("=== NEW FEMMEFLO CONTACT ENQUIRY ===");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Product/Query:", productQuery);
      console.log("Message:", message);
      console.log("=====================================");

      return NextResponse.json({
        success: true,
        message: "Enquiry received! (Dev mode: Configure SMTP in .env to send real emails)",
      });
    }
  } catch (err: any) {
    console.error("Error in contact API route:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
