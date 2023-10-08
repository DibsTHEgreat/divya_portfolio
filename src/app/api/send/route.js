import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();

        const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
        const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;
        const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_ADDRESS,
            auth: {
                user: EMAIL_ADDRESS,
                pass: EMAIL_PASSWORD
            }
        })

        const mailOption = {
            from: EMAIL_ADDRESS,
            to: RECIPIENT_EMAIL,
            subject: subject,
            html: `
        <h3>Hello Divya</h3>
        <li> title: ${subject}</li>
        <li> email: ${email}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}