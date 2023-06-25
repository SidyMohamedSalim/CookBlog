"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useState } from "react";
import axios from "axios";
import { client } from "@/src/lib/client/client";
import { article } from "@prisma/client";

const FormModify = ({ article }: { article: article }) => {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const addArticle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUploading(true);
    const data = new FormData(e.currentTarget);
    const title = String(data.get("title"));
    const newarticle = {
      title: title,
      description: String(data.get("description")),
      content: String(data.get("content")),
    };
    await client(`/api/articles/${article.id}/`, {
      method: "PATCH",
      data: JSON.stringify(newarticle),
    }).then((json) => {
      setUploading(false);
      router.refresh();
      console.log(json);
      console.log(newarticle);

      router.push("/admin/edit");
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          addArticle(e);
        }}
        className="flex flex-col justify-center items-center mt-5"
      >
        <input
          defaultValue={article.title}
          id="title"
          name="title"
          type="text"
          placeholder="title"
          className="border  px-3 w-[80%] text-black text-xl py-2 rounded-md border-gray-800 my-4"
        />
        <input
          defaultValue={article.description ?? ""}
          id="description"
          name="description"
          type="text"
          placeholder="description"
          className="w-[80%] border  px-3  text-black text-xl py-2 rounded-md border-gray-800 my-4"
        />

        <div className="w-full">
          <textarea
            name="content"
            id="content"
            placeholder="contenu"
            className="w-[80%] in-w-max h-96 border  px-3  text-black text-xl py-1 rounded-md border-gray-800 my-4"
            defaultValue={article.content}
          ></textarea>
        </div>

        <input
          disabled={uploading}
          type="submit"
          value={uploading ? "uploading..." : "Modifier"}
          className="bg-orange-400 px-6 py-3 text-white font-bold rounded-md hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </form>
    </div>
  );
};

export default FormModify;
