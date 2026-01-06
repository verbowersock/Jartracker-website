import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString();

    // Send email notification to yourself
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: 'JarTracker Contact <onboarding@resend.dev>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `📧 Contact Form: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
            <hr>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>Reply to: ${email}</em></p>
          `,
        });
        console.log(`Contact form email sent to ${process.env.NOTIFICATION_EMAIL} from: ${email}`);
      } catch (emailError) {
        console.error('Contact email send failed:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.log('Email not configured - missing RESEND_API_KEY or NOTIFICATION_EMAIL');
    }

    console.log(`New contact form submission: ${email} - ${subject} at ${timestamp}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}