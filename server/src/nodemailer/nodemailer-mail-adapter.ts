import nodemailer from "nodemailer";
import { MailAdapter, sendMailData } from "../adapters/mail-adapter";



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "070009b3b14898",
      pass: "0fe6349c25aee0",
    },
  });
  

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "João Gabriel <joaogabrielsevangelista@gmail.com>",
      subject,
      html: body,
    });
  }
}
