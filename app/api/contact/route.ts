import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, interest, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPass = process.env.GMAIL_APP_PASS;
    const contactReceiver = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPass) {
      console.error('Missing email configuration (GMAIL_USER / GMAIL_APP_PASS).');
      return NextResponse.json(
        { error: 'Email service configuration is missing on the server.' },
        { status: 500 }
      );
    }

    // Configure SMTP transport for Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for port 465, false for 587
      auth: {
        user: gmailUser,
        pass: gmailAppPass,
      },
    });

    // Map interest code to display name for email formatting
    const interestMapping: Record<string, string> = {
      'solar-epc': 'Commercial & Industrial Solar EPC',
      'bess': 'Battery Energy Storage (BESS)',
      'hybrid': 'Hybrid Solar-Diesel Power Systems',
      'mobility': 'Electric Mobility & EV Charging',
      'smart-infra': 'Smart Building & Energy Management',
      'advisory': 'Energy Advisory & Audits',
    };

    const serviceName = interestMapping[interest] || interest || 'Not Specified';

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`, // Must be gmailUser to avoid Gmail SMTP auth errors, replyTo will handle replies
      replyTo: email,
      to: contactReceiver,
      subject: `[Kha-Riz Website] New Inquiry: ${serviceName} from ${name}`,
      text: `
New Inquiry Received from Web Contact Form:
------------------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Service Required: ${serviceName}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #18181A; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Required:</td>
              <td style="padding: 8px 0;">${serviceName}</td>
            </tr>
          </table>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #18181A;">
            <strong style="display: block; margin-bottom: 10px;">Project Details / Message:</strong>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; font-size: 14px; color: #333333;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Nodemailer SMTP Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred while sending your message. Please try again.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
