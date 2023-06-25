"use client";
import { client } from "@/src/lib/client/client";
import React from "react";

export default function EmailForm({ typeEmail = 0 }: { typeEmail?: number }) {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email"));
    await client("/api/email", {
      method: "POST",
      data: JSON.stringify({ email }),
    })
      .then(() => {
        // Toastify({
        //   text: "Thank you for subscribing to our newsletter!",
        //   duration: 3000,
        //   style: {
        //     background: "black",
        //     color: "#A2FF86",
        //     fontSize: "1.5rem",
        //     padding: "1rem",
        //     close: true,
        //     width: "100%",
        //     position: "fixed",
        //     top: "0rem",
        //   },
        // }).showToast();
        e.currentTarget.clear();
      })
      .catch((err) => {
        console.error(err);
        // Toastify({
        //   text: "Something went wrong, please try again later.",
        //   duration: 3000,
        //   style: {
        //     background: "black",
        //     color: "#FF2171",
        //     fontSize: "1.5rem",
        //     padding: "1rem",
        //     close: true,
        //     width: "100%",
        //     position: "fixed",
        //     top: "0rem",
        //   },
        // }).showToast();
      });
  };

  return (
    <>
      {typeEmail === 1 ? (
        <form className="py-2" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="text-sm px-5 py-2 text-black shadow-2xl shadow-slate-400"
          />
          <input
            type="submit"
            value={"SUBSCRIBE"}
            className="bg-orange-400 font-semibold text-sm p-2 shadow-2xl shadow-slate-400"
          />
        </form>
      ) : (
        <form
          className="flex items-center justify-center my-5"
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="w-[60%] h-10 rounded-sm border-none z-0 px-3 bg-slate-100 text-black"
          />
          <input
            type="submit"
            value="Subscribe Now"
            className="h-10 bg-white rounded-lg -ml-3 z-20 text-xs px-8 cursor-pointer hover:bg-orange-400 hover:text-white transition-all"
          />
        </form>
      )}
    </>
  );
}
