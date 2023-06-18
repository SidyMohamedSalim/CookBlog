import React from "react";

const page = () => {
  return (
    <div>
      <section className="max-w-4xl max-xl:px-3 mx-auto text-center pt-32 pb-7 ">
        {/* categories */}
        <div className="py-10">
          <ul className="flex justify-evenly font-extrabold text-2xl cursor-pointer ">
            <li className="text-orange-500 border-b-2 border-orange-500">
              All
            </li>
            <li>Traditional</li>
            <li>Fast Food</li>
            <li>Beverge</li>
            <li>Deserts</li>
          </ul>
        </div>

        {/* Element */}

        <div className=" grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-lg:grid-cols-3 ">
          {/* article */}
          <div className="text-start w-fit shadow-2xl rounded-xl pb-6">
            <img src="/img1.jpg" alt="" className="rounded-xl " />
            <h1 className="font-tangerine text-2xl font-bold pt-4 pb-2 px-4">
              Article Title
            </h1>
            <p className="text-xs  font-sans font-light pt-1 pb-2 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum...
            </p>
          </div>{" "}
          {/* article */}
          <div className="text-start w-fit shadow-2xl rounded-xl pb-6">
            <img src="/img2.jpg" alt="" className="rounded-xl " />
            <h1 className="font-tangerine text-2xl font-bold pt-4 pb-2 px-4">
              Article Title
            </h1>
            <p className="text-xs  font-sans font-light pt-1 pb-2 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum...
            </p>
          </div>{" "}
          {/* article */}
          <div className="text-start w-fit shadow-2xl rounded-xl pb-6">
            <img src="/img3.jpg" alt="" className="rounded-xl " />
            <h1 className="font-tangerine text-2xl font-bold pt-4 pb-2 px-4">
              Article Title
            </h1>
            <p className="text-xs  font-sans font-light pt-1 pb-2 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum...
            </p>
          </div>{" "}
          {/* article */}
          <div className="text-start w-fit shadow-2xl rounded-xl pb-6">
            <img src="/img4.jpg" alt="" className="rounded-xl " />
            <h1 className="font-tangerine text-2xl font-bold pt-4 pb-2 px-4">
              Article Title
            </h1>
            <p className="text-xs  font-sans font-light pt-1 pb-2 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum...
            </p>
          </div>{" "}
          {/* article */}
          <div className="text-start w-fit shadow-2xl rounded-xl pb-6">
            <img src="/img5.jpg" alt="" className="rounded-xl " />
            <h1 className="font-tangerine text-2xl font-bold pt-4 pb-2 px-4">
              Article Title
            </h1>
            <p className="text-xs  font-sans font-light pt-1 pb-2 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum...
            </p>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default page;
