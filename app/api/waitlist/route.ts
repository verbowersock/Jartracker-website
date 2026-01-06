import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const { email, platform } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    if (!platform || !['android', 'ios'].includes(platform)) {
      return NextResponse.json({ error: 'Valid platform required (android or ios)' }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString();

    // Send email notification to yourself
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: 'JarTracker Waitlist <onboarding@resend.dev>', // Use this for testing
          to: process.env.NOTIFICATION_EMAIL,
          subject: `🎉 New JarTracker ${platform.toUpperCase()} Waitlist Signup!`,
          html: `
            <h2>New ${platform.toUpperCase()} Waitlist Signup</h2>
            <p><strong>Platform:</strong> ${platform.toUpperCase()}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
            <p><strong>Platform breakdown:</strong> Check your ${platform} waitlist!</p>
          `,
        });
        console.log(`Email sent to ${process.env.NOTIFICATION_EMAIL} for ${platform} signup: ${email}`);
      } catch (emailError) {
        console.error('Email send failed:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.log('Email not configured - missing RESEND_API_KEY or NOTIFICATION_EMAIL');
    }

    console.log(`New ${platform} waitlist signup: ${email} at ${timestamp}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing signup:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}