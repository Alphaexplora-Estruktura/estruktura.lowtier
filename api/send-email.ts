import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { first_name, last_name, email, contact_number, space_type, target_date, preferred_time, requirements } = req.body;

    // PAGBABAGO: Isinama ang email ng sender/client sa array para makatanggap din sila ng kopya
    const recipients = ['inquire@estruktura.ph', email];

    const data = await resend.emails.send({
      from: 'Estruktura <inquire@estruktura.ph>',
      to: recipients,
      replyTo: 'inquire@estruktura.ph', // Kung mag-reply ang client sa auto-copy, babalik sa inbox mo
      subject: `Site Visit Booking Confirmation: ${space_type} - ${first_name} ${last_name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Site Visit Request</title>
        </head>
        <body style="margin: 0; padding: 40px 20px; background-color: #171513; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1c1a18; border: 1px solid rgba(216, 195, 165, 0.15); border-radius: 4px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
            
            <!-- Header Section -->
            <tr>
              <td style="padding: 40px 40px 20px 40px; text-align: left; border-bottom: 1px solid rgba(216, 195, 165, 0.1);">
                <h1 style="margin: 0; font-family: Georgia, serif; font-size: 26px; font-weight: 400; color: #D8C3A5; letter-spacing: 2px; text-transform: uppercase;">
                  ESTRUKTURA
                </h1>
                <p style="margin: 5px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: rgba(245, 245, 245, 0.4); font-weight: 600;">
                  Site Visit Request Details
                </p>
              </td>
            </tr>

            <!-- Content Section -->
            <tr>
              <td style="padding: 40px;">
                
                <!-- Client Overview Block -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                  <tr>
                    <td>
                      <h2 style="margin: 0 0 5px 0; font-family: Georgia, serif; font-size: 20px; font-weight: 400; color: #f5f5f5;">
                        ${first_name} ${last_name}
                      </h2>
                      <p style="margin: 0; font-size: 14px; color: rgba(245, 245, 245, 0.6); font-weight: 300;">
                        ${email} &bull; ${contact_number}
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Main Details Card -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: rgba(216, 195, 165, 0.03); border: 1px solid rgba(216, 195, 165, 0.08); border-radius: 2px; margin-bottom: 30px;">
                  <tr>
                    <td style="padding: 24px;">
                      
                      <!-- Row 1: Space Type -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                        <tr>
                          <td width="35%" style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(245, 245, 245, 0.4); font-weight: 600; vertical-align: top; padding-bottom: 8px;">
                            Space Type
                          </td>
                          <td width="65%" style="font-size: 15px; color: #f5f5f5; font-weight: 300; vertical-align: top; padding-bottom: 8px;">
                            ${space_type}
                          </td>
                        </tr>
                      </table>

                      <!-- Row 2: Target Date -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                        <tr>
                          <td width="35%" style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(245, 245, 245, 0.4); font-weight: 600; vertical-align: top; padding-bottom: 8px;">
                            Target Date
                          </td>
                          <td width="65%" style="font-size: 15px; color: #f5f5f5; font-weight: 300; vertical-align: top; padding-bottom: 8px;">
                            ${target_date}
                          </td>
                        </tr>
                      </table>

                      <!-- Row 3: Preferred Time -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="35%" style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(245, 245, 245, 0.4); font-weight: 600; vertical-align: top;">
                            Preferred Time
                          </td>
                          <td width="65%" style="font-size: 15px; color: #f5f5f5; font-weight: 300; vertical-align: top;">
                            ${preferred_time}
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>

                <!-- Requirements Text Area -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(245, 245, 245, 0.4); font-weight: 600; padding-bottom: 10px;">
                      Vision & Requirements
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 14px; line-height: 1.6; color: rgba(245, 245, 245, 0.8); font-weight: 300; background-color: rgba(255, 255, 255, 0.02); border-left: 2px solid #D8C3A5; padding: 16px; white-space: pre-wrap;">
                      ${requirements}
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer Section -->
            <tr>
              <td style="padding: 0 40px 40px 40px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: rgba(245, 245, 245, 0.3); font-weight: 300; line-height: 1.5;">
                  This is an automated operational notification generated from the Estruktura platform. 
                  <br>
                  A representative will get in touch shortly to finalize the assessment routing.
                </p>
              </td>
            </tr>

          </table>
          
        </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to execute mail sequence' });
  }
}