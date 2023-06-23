import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "../../src/db/prisma";
import Link from "next/link";

const page = async () => {
  const admin = await prisma.author.findFirst({
    where: {
      isAdmin: true,
    },
  });
  console.log(admin);
  if (!admin) {
    redirect("/articles");
  }
  return (
    <div className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7">
      <h1 className="font-bold text-2xl">
        Bievenue <span className="text-orange-500">{admin.name}</span> Dans la
        page admin
      </h1>

      <ul className="flex justify-between flex-col gap-3 mt-4 font-sans text-lg">
        <h1>
          <Link
            className="border-b text-sky-400 border-sky-400 hover:text-sky-900"
            href={"/admin/add"}
          >
            Ajouter Un Article
          </Link>
        </h1>
        <h1>
          <Link
            className="border-b text-sky-400 border-sky-400 hover:text-sky-900"
            href={"/admin/edit"}
          >
            Modifier ou Suprimer un Article
          </Link>
        </h1>
        <h1></h1>
      </ul>
    </div>
  );
};

export default page;
