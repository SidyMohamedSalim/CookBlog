"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { article } from "../../../src/types/article";
import { useState } from "react";
import axios from "axios";
import { client } from "@/src/lib/client/client";
import Image from "next/image";

const FormAdd = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const router = useRouter();

  const handleUpload = async (name: string) => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post(`/api/articles/new/${name}`, formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };

  const addArticle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    const data = new FormData(e.currentTarget);
    const title = String(data.get("title"));
    const article: article = {
      title: title,
      description: String(data.get("description")),
      content: String(data.get("content")),
      image: `images/${title}.png`,
    };

    await handleUpload(article.title);

    client("/api/articles", {
      method: "POST",
      data: JSON.stringify(article),
    }).then((json) => {
      setUploading(false);
      router.refresh();
      router.push("/admin");
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
          id="title"
          name="title"
          type="text"
          placeholder="title"
          className="border  px-3 w-[80%] text-black text-xl py-2 rounded-md border-gray-800 my-4"
        />
        <input
          id="description"
          name="description"
          type="text"
          placeholder="description"
          className="w-[80%] border  px-3  text-black text-xl py-2 rounded-md border-gray-800 my-4"
        />

        {/* image */}
        <div className="m-4">
          <label className="inline-block mb-2 text-gray-500">
            Telecharger Une Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-full border-4 border-orange-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
              {selectedImage ? (
                <div className="w-32 h-10">
                  <Image width={300} height={300} src={selectedImage} alt="" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Selectionner une image
                  </p>
                </div>
              )}

              <input
                type="file"
                className="opacity-0"
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];
                    setSelectedImage(URL.createObjectURL(file));
                    setSelectedFile(file);
                  }
                }}
              />
            </label>
          </div>
        </div>
        {/* find input img */}

        <div className="w-full">
          <textarea
            name="content"
            id="content"
            placeholder="contenu"
            className="w-[80%] in-w-max h-96 border  px-3  text-black text-xl py-1 rounded-md border-gray-800 my-4"
          ></textarea>
        </div>

        <input
          type="submit"
          value={uploading ? "uploading..." : "Ajouter"}
          className="bg-orange-400 px-6 py-3 text-white font-bold rounded-md hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </form>
    </div>
  );
};

export default FormAdd;
