import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* premier section */}
      <section className="w-screen bg-orange-200 py-10">
        <div className="max-w-3xl mx-auto flex  relative">
          <div className="absolute left-0 -bottom-20">
            {/* content */}
            <div className="flex justify-evenly bg-orange-50 px-2 py-2 rounded-md my-3 shadow-2xl ">
              <img
                src="/avatar.jpg"
                alt=""
                className="rounded-full w-12 h-12 mr-2"
              />
              <div>
                <h1 className="text-sm font-light">Pizza fait maison</h1>
                <p className="text-xs font-bold">26 min</p>
              </div>
            </div>
            {/* content */}
            <div className="flex justify-evenly bg-orange-50 px-2 py-2 rounded-md my-3 shadow-2xl ">
              <img
                src="/avatar.jpg"
                alt=""
                className="rounded-full w-12 h-12 mr-2"
              />
              <div>
                <h1 className="text-sm font-light">Pizza fait maison</h1>
                <p className="text-xs font-bold">26 min</p>
              </div>
            </div>
            {/* content */}
            <div className="flex justify-evenly bg-orange-50 px-2 py-2 rounded-md my-3 shadow-2xl ">
              <img
                src="/avatar.jpg"
                alt=""
                className="rounded-full w-12 h-12 mr-2"
              />
              <div>
                <h1 className="text-sm font-light">Pizza fait maison</h1>
                <p className="text-xs font-bold">26 min</p>
              </div>
            </div>
          </div>
          <div className="w-[100%]"></div>
          <div className="p-4">
            <img className="w-10 h-10" src="/vercel.svg" alt="" />

            <h1 className="font-bold py-4 text-md">Free Glass For Members</h1>
            <p className="text-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              eos minus aspernatur temporibus debitis excepturi, quibusdam
            </p>
          </div>
          <div className="p-4">
            <img className="w-10 h-10" src="/vercel.svg" alt="" />

            <h1 className="font-bold py-4 text-md">Free Glass For Members</h1>
            <p className="text-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              eos minus aspernatur temporibus debitis excepturi, quibusdam
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
