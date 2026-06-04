import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      propertyType,
      budget,
      message,
      recaptchaToken,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const toTitleCase = (str: string) => {
      return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
    };
    const formattedName = name ? toTitleCase(name) : "Client";

    // --- TEMPORARILY COMMENTED OUT FOR TESTING ---
    /*
    if (!recaptchaToken) { ... }
    */
    // ---------------------------------------------

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_FROM,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Sukoon Developer" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Inquiry: ${propertyType || "Website"} - ${formattedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light dark">
          <meta name="supported-color-schemes" content="light dark">
          <style>
            /* Default Light Mode Styles are inline. These classes override for Dark Mode */
            @media (prefers-color-scheme: dark) {
              .body-bg { background-color: #020617 !important; }
              .main-table { background-color: #0f172a !important; border: 1px solid #1e293b !important; }
              .text-primary { color: #ffffff !important; }
              .text-secondary { color: #cbd5e1 !important; }
              .text-muted { color: #94a3b8 !important; }
              .data-wrapper { background-color: #1e293b !important; border-color: #334155 !important; }
              .data-border { border-bottom-color: #334155 !important; }
              .msg-wrapper { background-color: #020617 !important; border-color: #334155 !important; }
              .footer-wrapper { background-color: #020617 !important; border-top-color: #1e293b !important; }
            }
          </style>
        </head>
        <body class="body-bg" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; padding: 40px 20px; margin: 0; color: #1a1a1a;">

          <table class="main-table" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0;">

            <!-- Header stays dark in both modes for the white logo -->
            <tr>
              <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 30px; text-align: center; border-bottom: 4px solid #52B7EC;">
                <img src="https://sukoon-developer.vercel.app/logo-white.webp" alt="Sukoon Developer" style="max-width: 250px; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto; border: none; outline: none; background-color: transparent;" />
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">NEW INQUIRY</h1>
                <p style="color: #52B7EC; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Website Contact Form</p>
              </td>
            </tr>

            <tr>
              <td style="padding: 40px 40px 20px 40px;">
                <h2 class="text-primary" style="margin-top: 0; color: #0f172a; font-size: 22px; font-weight: 600;">Hello Team,</h2>
                <p class="text-secondary" style="font-size: 16px; line-height: 1.6; color: #555555;">You have received a new prospective client inquiry from the website. Please review the prospect's details below:</p>
              </td>
            </tr>

            <tr>
              <td style="padding: 0 40px 30px 40px;">
                <div class="data-wrapper" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td class="text-muted data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; width: 40%; color: #64748b; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</td>
                      <td class="text-primary data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px; font-weight: 600;">${formattedName}</td>
                    </tr>
                    <tr>
                      <td class="text-muted data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                      <td class="data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; font-size: 16px;">
                        <a href="mailto:${email}" style="color: #52B7EC; text-decoration: none; font-weight: 500;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                      <td class="text-primary data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px;">${phone || "<span class='text-muted' style='color: #94a3b8; font-style: italic;'>Not provided</span>"}</td>
                    </tr>
                    <tr>
                      <td class="text-muted data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Property</td>
                      <td class="text-primary data-border" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px;">${propertyType || "<span class='text-muted' style='color: #94a3b8; font-style: italic;'>Not specified</span>"}</td>
                    </tr>
                    <tr>
                      <td class="text-muted" style="padding: 16px 20px; color: #64748b; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Budget</td>
                      <td class="text-primary" style="padding: 16px 20px; color: #0f172a; font-size: 16px; font-weight: 600;">${budget || "<span class='text-muted' style='color: #94a3b8; font-style: italic; font-weight: normal;'>Not specified</span>"}</td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding: 0 40px 40px 40px;">
                <h3 class="text-primary" style="color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #52B7EC; padding-bottom: 8px; display: inline-block; margin-top: 0;">Client Message</h3>
                <div class="msg-wrapper" style="background-color: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #cbd5e1; margin-top: 10px;">
                  <p class="text-secondary" style="margin: 0; white-space: pre-wrap; font-size: 16px; line-height: 1.8; color: #334155; font-style: italic;">"${message}"</p>
                </div>
              </td>
            </tr>

            <tr>
              <td class="footer-wrapper" style="background-color: #f1f5f9; padding: 35px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #52B7EC; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; letter-spacing: 0.5px; margin-bottom: 25px;">Reply to Client</a>
                <p class="text-muted" style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.6;">
                  This is an automated notification from the <strong>Sukoon Developer</strong> website system.<br>
                  Do not reply directly to this system email address.
                </p>
              </td>
            </tr>
          </table>

          <table style="width: 100%;">
            <tr><td style="padding: 20px;"></td></tr>
          </table>
          
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 },
    );
  }
}