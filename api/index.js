import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

config();
const app = express();

app.use(json());

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const TO_EMAIL = "info@potlucktableware.com";

app.post('/submit', async (req, res) => {
  const { name, email, mobile, query } = req.body;

  try {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });

    const mailOptions = {
      from: GMAIL_USER,
      to: TO_EMAIL,
      subject: 'New Form Submission',
      text: `
New contact request1:

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Query:
${query}
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Form submitted and email sent successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
