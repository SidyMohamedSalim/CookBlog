import React from "react";
import FormModify from "./formModify";
import { prisma } from "../../../../src/db/prisma";

const page = async ({ params }: { params: { id: string } }) => {
  const article = await prisma.article.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!article) {
    return <div>Article Not Found</div>;
  }
  return (
    <div className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7 font-sans">
      <h1 className="font-bold text-2xl">Modifier l'Article</h1>
      <FormModify article={article} />
    </div>
  );
};

export default page;
