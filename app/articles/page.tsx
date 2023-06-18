import Link from "next/link";
import React from "react";
import { prisma } from "../../src/db/prisma";
import { article } from "../../src/types/article";

const page = async () => {
  const articles: article[] = await prisma.article.findMany({});
  return (
    <div>
      <section className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7 ">
        {/* categories */}
        <div className="py-10">
          <ul className="flex justify-evenly font-extrabold text-2xl cursor-pointer ">
            <li className="text-orange-500 border-b-2 border-orange-500">
              All
            </li>
            <li>Traditional</li>
            <li>Fast Food</li>
            <li>Beverge</li>
            <li>Deserts</li>
          </ul>
        </div>

        {/* Element */}

        <div className=" grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-lg:grid-cols-3 ">
          {/* article */}
          {articles.map((article) => (
            <Link href={"/articles/" + article.id}>
              <div className="text-start w-fit shadow-2xl rounded-xl pb-6">
                <img src={article.image} alt="" className="rounded-xl " />
                <h1 className="font-tangerine text-2xl font-bold pt-4 pb-2 px-4">
                  {article.title}
                </h1>
                <p className="text-xs  font-sans font-light pt-1 pb-2 px-4">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
