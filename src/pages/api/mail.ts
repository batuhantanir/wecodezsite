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
    const { name, mail, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `Name: ${name} \nEmail: ${mail} \nMessage: ${text}`,
    };

    try {
      await transporter.sendMail(mailOptions),
        (error: string) => {
          if (error) {
            console.log(error);
            res.status(500).json({ message: "Error sending email" });
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
