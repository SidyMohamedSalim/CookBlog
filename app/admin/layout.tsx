import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-gray-800">
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Admin</span>
          </div>

          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
              >
                Bienvenu Dans Votre espace Admin
              </a>
              <a href="#responsive-header" />
            </div>
          </div>
        </nav>
      </header>
      <div className="max-w-4xl max-xl:px-3 mx-auto pt-10 pb-1  ml-36">
        {" "}
        <Link href={"/admin"} className="text-sky-500 text-4xl font-extrabold ">
          {"<-"}
        </Link>
      </div>

      {children}
    </div>
  );
}

export default layout;
