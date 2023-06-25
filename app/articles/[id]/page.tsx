import Image from "next/image";
import React from "react";
import { prisma } from "../../../src/db/prisma";

const page = async ({ params }: { params: { id: string } }) => {
  const article = await prisma.article.findUnique({
    where: {
      id: params.id,
    },
  });

  const author = await prisma.author.findUnique({
    where: {
      id: article?.authorId ?? "",
    },
  });

  if (article === null) {
    return <div>Article not found</div>;
  }

  const paragraphs = article.content.split("/");

  return (
    <div>
      <section className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7 ">
        <h1 className="text-4xl font-bold py-6">type {article.title}</h1>
        <Image
          width={800}
          height={800}
          src={article.image ?? `/images/${article.title}.png`}
          alt=""
          className="mx-auto rounded-md"
        />
        <div className="text-start font-sans font-light text-sm py-6">
          <p className="py-3 text-center italic bg-slate-100 px-3 rounded-r-xl">
            "{article.description}"
          </p>
          {paragraphs.map((para) => (
            <p className="py-3 my-4 indent-6 text-lg">{para}</p>
          ))}
        </div>
        {author && (
          <h1 className="text-end py-5 font-light">
            <p>Author : </p>
            {author.name && author.name}
          </h1>
        )}
      </section>
    </div>
  );
};

export default page;
