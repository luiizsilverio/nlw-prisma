import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "945407d9922c4a",
    pass: "d1b67031f0cf2b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Luizdev <oi@equipeluizdev.com.br>',
      to: 'José da Silva <jose.da.silva@gmail.com>',
      subject: data.subject,
      html: data.body
    })
  }
}