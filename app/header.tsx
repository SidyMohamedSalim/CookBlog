import Link from "next/link";
import React from "react";
import { siteConfig } from "../../config/site";

const Header = () => {
  return (
    <header className="bg-head-bg bg-cover">
      <div className="bg-[rgba(0,0,0,0.2)]">
        <div className="flex justify-between items-center max-w-3xl mx-auto pt-2">
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
        <div className="max-w-3xl mx-auto flex items-center justify-between py-5  min-h-[30vh]">
          {/* left */}
          <div className="z-10">
            <h1 className="text-4xl py-6 font-bold space-y-2">
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
          <div className="w-[60%] opacity-80">
            <img src="/food.svg" alt={""} className="w-[100%]s" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
