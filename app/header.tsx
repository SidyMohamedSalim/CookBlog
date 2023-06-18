import Link from "next/link";
import React from "react";
import { links } from "../src/config/site";

const Header = () => {
  return (
    <div className="bg-head-bg bg-cover  ">
      <div className="bg-[rgba(0,0,0,0.4)] text-white max-xl:px-3">
        <div className="flex justify-between items-center max-w-4xl mx-auto pt-3">
          <div>
            <h1 className="font-extrabold italic text-2xl font-tangerine">
              Bestiste
            </h1>
          </div>
          <nav>
            <ul className="decoration-none flex justify-evenly font-tangerine">
              {links.map((link) => (
                <li className="px-3 text-sm" key={link.name}>
                  <Link className="hover:text-orange-600" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
