import Link from "next/link";
import React from "react";
import { prisma } from "../../../src/db/prisma";
import { article } from "../../../src/types/article";
import ButtonDelete from "../edit/buttonDelete";

const page = async () => {
  const articles = await prisma.article.findMany();

  return (
    <ul className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7 font-sans">
      <h1 className="font-bold text-3xl py-8">
        Modifier ou Supprimer des articles
      </h1>
      <p>
        <span className="text-red-600 font-bold">Attention :</span> Cette action
        est irreversible
      </p>
      {articles.map((article) => (
        <li
          className="flex justify-between my-4 border-y py-2"
          key={article.id}
        >
          <h1>{article.title}</h1>
          <div className="flex justify-center items-center gap-3">
            <Link
              href={`/admin/edit/${article.id}`}
              className="border-b text-sky-400 hover:text-sky-900 border-sky-400"
            >
              <h2>Modifier</h2>
            </Link>
            <ButtonDelete articleId={article.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default page;
