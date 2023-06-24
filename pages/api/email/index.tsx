import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "../../../src/db/prisma";

const bodyScheme = z.object({
  email: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const NewData = bodyScheme.parse(data);

    const email = await prisma.emails.create({
      data: {
        email: NewData.email,
      },
    });

    res.status(200).json({ email });
  }
}
