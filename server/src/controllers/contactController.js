import transporter from '../config/mail.js';

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  // Compile mail details
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: 'basavarajmaneppagol7760@gmail.com', // destination address
    replyTo: email, // reply back directly to contact email
    subject: `Portfolio Contact from ${name}`,
    text: `You have received a new contact submission:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #030014; color: #ffffff;">
        <h2 style="border-bottom: 2px solid #06b6d4; padding-bottom: 10px; color: #06b6d4; font-family: 'Space Grotesk', monospace;">New Contact Message</h2>
        <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 15px 0;"><strong>Email:</strong> ${email}</p>
        <div style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 15px; border-radius: 4px; margin-top: 20px;">
          <h4 style="margin-top: 0; color: #a855f7; font-family: 'Space Grotesk', monospace;">Message</h4>
          <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: #cbd5e1;">${message}</p>
        </div>
        <p style="font-size: 11px; color: #64748b; text-align: center; margin-top: 30px; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 15px;">
          MERN Stack Developer Portfolio • Express.js Server
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
};
