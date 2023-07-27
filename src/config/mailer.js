import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'aldo.martinez@institutoculturalazteca.com',
    pass: 'uyxgsknngbewujis'
  }
});


  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    await transporter.sendMail({
      from: 'aldo.martinez@institutoculturalazteca.com', // sender address
      to: "correo@gmail.com", // list of receivers
      subject: "Testing 👻 ✔", // Subject line
      text: "This is only a test texting", // plain text body
      html: "<b>The main reason to send this email is that it Works! 😁</b>", // html body
    })}

    transporter.verify().then(()=> {
        console.log('Ready to send mails');
    })

export { main} 