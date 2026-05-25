import { Resend } from 'resend';

// Awtomatikong kukunin ni Vercel ang RESEND_API_KEY mula sa Environment Variables mo
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Siguraduhing POST request lang ang tatanggapin
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      first_name, 
      last_name, 
      email, 
      contact_number, 
      space_type, 
      target_date, 
      preferred_time, 
      requirements 
    } = req.body;

    // I-format at i-send ang email gamit ang Resend
    const data = await resend.emails.send({
      from: 'Estruktura Website <inquire@estruktura.ph>', // Sender
      to: ['inquire@estruktura.ph'], // Receiver (sa inbox mo papasok)
      replyTo: email, // Pag nireplyan mo, diretso sa client
      subject: `New Site Visit Booking: ${space_type} - ${first_name} ${last_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #171513;">
          <h2 style="color: #8c7e71; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Site Visit Inquiry</h2>
          
          <p><strong>Client Name:</strong> ${first_name} ${last_name}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${contact_number}</p>
          
          <h3 style="margin-top: 25px; color: #D8C3A5;">Booking Details</h3>
          <p><strong>Space Type:</strong> ${space_type}</p>
          <p><strong>Target Date:</strong> ${target_date}</p>
          <p><strong>Preferred Time:</strong> ${preferred_time}</p>
          
          <h3 style="margin-top: 25px; color: #D8C3A5;">Requirements / Vision</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap; border: 1px solid #eee;">
            ${requirements}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}