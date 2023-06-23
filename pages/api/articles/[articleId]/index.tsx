import { article } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { json } from "node:stream/consumers";
import { z } from "zod";
import { prisma } from "../../../../src/db/prisma";

const bodyScheme = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
});

const queryScheme = z.object({
  articleId: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    const data = JSON.parse(req.body);
    const NewData = bodyScheme.parse(data);
    const query = queryScheme.parse(req.query);

    const oldArticle = await prisma.article.findUnique({
      where: {
        id: query.articleId,
      },
    });
    console.log(query);

    const article: article = await prisma.article.update({
      where: {
        id: query.articleId,
      },
      data: {
        ...oldArticle,
        ...NewData,
      },
    });

    res.status(200).json({ articles: article });
  } else if (req.method === "DELETE") {
    const query = queryScheme.parse(req.query);

    await prisma.article.delete({
      where: {
        id: query.articleId,
      },
    });
    res.status(200).json({ message: "article deleted" });
  }
}
