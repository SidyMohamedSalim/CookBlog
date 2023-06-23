"use client";
import { client } from "@/src/lib/client/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonDelete = ({ articleId }: { articleId: string }) => {
  const router = useRouter();

  const onclick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await client(`/api/articles/${articleId}`, { method: "DELETE" })
      .then((json) => {
        console.log(articleId);

        router.refresh();
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <button
      className="text-red-500 px-4 py-2 hover:text-red-900"
      onClick={(e) => onclick(e)}
    >
      x
    </button>
  );
};

export default ButtonDelete;
