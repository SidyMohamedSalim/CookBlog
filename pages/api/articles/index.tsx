import { article } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { json } from "node:stream/consumers";
import { z } from "zod";
import { prisma } from "../../../src/db/prisma";

const articleScheme = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);

    const data = JSON.parse(req.body);

    if (!data) {
      res.status(400).json({ error: "Bad Request" });
      return;
    }
    const NewData = articleScheme.parse(data);
    const author = await prisma.author.findUnique({
      where: {
        email: "Mariela.Crooks94@hotmail.com",
      },
    });

    const article: article = await prisma.article.create({
      data: {
        ...NewData,
        authorId: author?.id,
      },
    });

    res.status(200).json({ articles: article });
  } else if (req.method === "PATCH") {
    const data = JSON.parse(req.body);
    const NewData = articleScheme.parse(data);

    const article: article = await prisma.article.update({
      where: {
        id: req.query.articleId as string,
      },
      data: {
        ...NewData,
      },
    });

    res.status(200).json({ articles: article });
  } else if (req.method === "DELETE") {
  }
}
