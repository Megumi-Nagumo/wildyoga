//Purpose: This file is an API route handler that processes booking requests from the front end.

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, phoneNumber, email } = req.body;

    try {
      // Send email using Resend
      await resend.emails.send({
        from: 'hello@equivalentpoetfray.com',
        to: email, 
        subject: 'Booking Confirmation',
        html: `
          <p>Dear ${firstName} ${lastName},</p>
          <p>Thank you for booking a session with us. We look forward to seeing you.</p>
          <p>Best regards,<br/>Yoga Studio</p>
        `,
      });

      res.status(200).json({ message: 'Booking successful, confirmation email sent' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Booking successful, but failed to send confirmation email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
