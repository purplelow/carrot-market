import mail from "@sendgrid/mail";
import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

mail.setApiKey(process.env.SENDGRID_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  /* await client.user.create({
    data: {
      email: "ab",
      name: "js",
    },
  });

  res.json({
    ok: true,
  });
  if (req.method !== "POST") {
    res.status(401).end();
  } */

  const { phone, email } = req.body;

  const user = phone ? { phone: +phone } : email ? { email } : null;

  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(1000000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log("req.body? user? ::: ", user);
  console.log("const token ? ::: ", token);

  /* if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("Found it.");
    if (!user) {
      // 시제
      console.log("Did not find. Will create");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log("User (email) : ", user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("Fount it.");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
    console.log("User (phone) : ", user);
  } */

  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}.`,
    });
    console.log("message ::: ", message); */
  } else if (email) {
    /* const email = await mail.send({
      from: "purplelow1@gmail.com",
      to: "purplelow1@gmail.com",
      subject: "Your Carrot Market Verification Email",
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    });
    console.log("email ::: ", email); */
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
