import React from "react";
import { prisma } from "../../../src/db/prisma";
import { article } from "../../../src/types/article";
import ButtonDelete from "./buttonDelete";

const page = async () => {
  const articles = await prisma.article.findMany();

  return (
    <ul className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7 font-sans">
      <h1 className="font-bold text-3xl ">Supprimer des articles</h1>
      <p>
        <span className="text-red-600 font-bold">Attention :</span> Cette action
        est irreversible
      </p>
      {articles.map((article) => (
        <li
          className="flex justify-between my-4 border-y py-2"
          key={article.id}
        >
          {article.title} <ButtonDelete articleId={article.id} />
        </li>
      ))}
    </ul>
  );
};

export default page;
