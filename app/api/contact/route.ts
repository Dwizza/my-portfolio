import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Missing Environment Variables. Make sure EMAIL_USER and EMAIL_APP_PASSWORD are set in .env.local");
      return NextResponse.json(
        { error: 'Server misconfiguration: Missing email credentials. Please check .env.local and restart the server.' },
        { status: 500 }
      );
    }
    
    if (process.env.EMAIL_APP_PASSWORD === "PLACEHOLDER") {
      return NextResponse.json(
        { error: 'Action Required: Open the .env.local file and replace "PLACEHOLDER" with your actual 16-character Google App Password, then restart the server.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'oussamaerrahili124@gmail.com', // Sending the email to your personal Gmail
      subject: `New Portfolio Message: ${subject || 'No Subject'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb;">New Message from Portfolio</h2>
          <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
          <hr />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Mail delivery failed: ' + (error instanceof Error ? error.message : 'Unknown error occurred.') },
      { status: 500 }
    );
  }
}
