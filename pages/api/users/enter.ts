import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });
  const token = await client.token.create({
    data: {
      payload: "1234",
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  console.log(user);
  console.log(token);
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
  return res.status(200).end();
}

export default withHandler("POST", handler);
