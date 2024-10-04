import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: process.env.ADMIN_MAILS,
      subject: subject,
      text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions),
        (error: string) => {
          if (error) {
            console.log(error);
            res.status(500).json({ message: "Error sending email" + error});
          } else {
            res.status(200).json({ message: "Email sent successfully!" });
          }
        };
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    redirect(res, "/");
  }
}
