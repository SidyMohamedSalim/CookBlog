"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonDelete = ({ articleId }: { articleId: string }) => {
  const router = useRouter();

  const onclick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await axios
      .delete(`/api/articles/${articleId}`)
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
      className="bg-red-300 px-4 py-2 hover:bg-red-500"
      onClick={(e) => onclick(e)}
    >
      x
    </button>
  );
};

export default ButtonDelete;
