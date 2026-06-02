// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const {
//       name,
//       email,
//       phone,
//       propertyType,
//       budget,
//       message,
//       recaptchaToken,
//     } = body;

//     // 1. Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "Name, email, and message are required." },
//         { status: 400 },
//       );
//     }

//     if (!recaptchaToken) {
//       return NextResponse.json(
//         { success: false, error: "Please complete the CAPTCHA verification." },
//         { status: 400 },
//       );
//     }

//     // 2. Verify reCAPTCHA with Google
//     const verifyRes = await fetch(
//       "https://www.google.com/recaptcha/api/siteverify",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
//       },
//     );

//     const verifyData = await verifyRes.json();

//     if (!verifyData.success) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "CAPTCHA verification failed. Please try again.",
//         },
//         { status: 400 },
//       );
//     }

//     // 3. Configure the SMTP transporter for Zoho
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT), // 587
//       secure: false, // true for 465, false for 587 (enables TLS)
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     // 4. Construct the email content
//     const mailOptions = {
//       from: `"Sukoon Developer" <${process.env.SMTP_USER}>`, // Displays the formatted name
//       to: process.env.SMTP_USER, // Sending to itself
//       replyTo: email, // Allows you to hit "Reply" to answer the customer
//       subject: `New Website Inquiry from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; color: #1F1F1F; max-width: 600px;">
//           <h2 style="color: #52B7EC; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
//           <p><strong>Property Type:</strong> ${propertyType || "Not specified"}</p>
//           <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
//           <p><strong>Message:</strong></p>
//           <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
//             <p style="margin: 0; white-space: pre-wrap;">${message}</p>
//           </div>
//         </div>
//       `,
//     };

//     // 5. Send the email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({
//       success: true,
//       message: "Email sent successfully!",
//     });
//   } catch (error: any) {
//     console.error("Email sending error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Failed to send email. Please try again later.",
//       },
//       { status: 500 },
//     );
//   }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, propertyType, budget, message, recaptchaToken } = body;

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // --- TEMPORARILY COMMENTED OUT FOR TESTING ---
    /*
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Please complete the CAPTCHA verification." },
        { status: 400 }
      );
    }

    // 2. Verify reCAPTCHA with Google
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }
    */
    // ---------------------------------------------

    // 3. Configure the SMTP transporter for Zoho
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // 587
      secure: true, // true for 465, false for 587 (enables TLS)
      auth: {
        user: process.env.SMTP_FROM,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 4. Construct the email content
    const mailOptions = {
      from: `"Sukoon Developer" <${process.env.SMTP_FROM}>`, 
      to: process.env.SMTP_TO, 
      replyTo: email, 
      subject: `New Website Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1F1F1F; max-width: 600px;">
          <h2 style="color: #52B7EC; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Property Type:</strong> ${propertyType || "Not specified"}</p>
          <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}