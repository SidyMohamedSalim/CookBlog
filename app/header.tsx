import Link from "next/link";
import React from "react";
import { siteConfig } from "../../config/site";

const Header = () => {
  return (
    <header className="bg-head-bg bg-cover">
      <div className="bg-[rgba(0,0,0,0.2)]">
        <div className="flex justify-between items-center max-w-3xl mx-auto pt-3">
          <div>
            <h1 className="font-bold italic text-lg">Bestiste</h1>
          </div>
          <nav>
            <ul className="decoration-none flex justify-evenly">
              {siteConfig.map((link) => (
                <li className="px-3 text-sm">
                  <Link className="hover:text-orange-600" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* home  */}
        <div className="max-w-3xl mx-auto flex items-center justify-between py-5  sm:min-h-[50vh] relative">
          {/* left */}
          <div className="z-10">
            <h1 className="text-4xl py-6 font-bold space-y-2 text-white">
              Master The <br />
              Culinary Arts Today
            </h1>
            <form className="py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-sm px-5 py-2 shadow-2xl shadow-slate-400"
              />
              <input
                type="button"
                value={"SUBSCRIBE"}
                className="bg-orange-400 font-semibold text-sm p-2 shadow-2xl shadow-slate-400"
              />
            </form>
            <p className="text-sm py-2">Get Your free Cooking Books</p>
          </div>
          {/* Rigth */}
          <div className="absolute bottom-0 -right-32 h-[40vh] ">
            <img src="/chef.svg" alt={""} className="w-[100%] h-[40vh]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
