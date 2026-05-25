import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { first_name, last_name, email, contact_number, space_type, target_date, preferred_time, requirements } = req.body;

    const data = await resend.emails.send({
      from: 'Estruktura Website <inquire@estruktura.ph>', // Dito na tama ang email
      to: ['inquire@estruktura.ph'], // Dito papasok ang inquiry
      replyTo: email,
      subject: `New Site Visit Booking: ${space_type} - ${first_name} ${last_name}`,
      html: `
        <h3>New Site Visit Request</h3>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact_number}</p>
        <p><strong>Space Type:</strong> ${space_type}</p>
        <p><strong>Requested Date:</strong> ${target_date}</p>
        <p><strong>Preferred Time:</strong> ${preferred_time}</p>
        <p><strong>Vision/Requirements:</strong><br>${requirements}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}