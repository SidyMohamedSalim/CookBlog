import Image from "next/image";
import Link from "next/link";
import React from "react";
import { links, configSite } from "../src/config/site";

const Header = () => {
  return (
    <div className="bg-head-bg bg-cover  ">
      <div className="bg-[rgba(0,0,0,0.5)] text-white max-xl:px-3">
        <div className="flex justify-between items-center max-w-4xl mx-auto pt-3">
          <div className="flex flex-col justify-center items-center">
            <Image
              width={35}
              height={50}
              src={"/cookLogo.png"}
              alt={"le logo de " + configSite.name}
              className="rounded-lg"
            />
            <h1 className="font-bold italic font-logofont">
              {configSite.name}
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

              <li className="px-3 text-sm text-red-600 bg-white rounded-sm">
                <Link className="hover:text-orange-600" href={"/admin"}>
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
