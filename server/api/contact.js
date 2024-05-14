import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const env = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.public.NUXT_API_USER_MAIL,
      pass: env.public.NUXT_API_USER_PASSWORD,
    },
  });

  const { data } = await readBody(event);
  const htmlContent = `
      <b>ชื่อ - สกุล : ${data.name}</b>
      <p>สินค้าที่สนใจ : ${data.interested_credit.join(", ")}</p>
      <p>ชื่อบริษัท : ${data.company_name}</p>
      <p>เบอร์โทรศัพท์ : ${data.zipcode}</p>
      <p>Email : ${data.mail}</p>
    `;

  const option = {
    from: "zycoda.landing@gmail.com",
    to: env.public.NUXT_API_MAIL,
    subject: "ข้อมูลสมัครขอทดลองใช้ Demo",
    text: "ข้อมูลผู้สมัคร",
    html: htmlContent,
  };

  const send = () => {
    return new Promise((resolve, reject) => {
      transporter.sendMail(option, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info.response);
        }
      });
    });
  };

  const run = await send();

  return {
    status: "OK",
    message: run,
  };

  //   transporter.sendMail(option, (err, info) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(info.response);
  //     }
  //   });
});
