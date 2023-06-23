import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-head-bg bg-cover  ">
        <div className="bg-[rgba(0,0,0,0.4)] text-white max-xl:px-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between py-5  sm:min-h-[50vh] relative max-md:justify-center">
            {/* left */}
            <div className="z-10">
              <h1 className="text-4xl py-6 font-bold space-y-2 text-white font-tangerine">
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
            <div className="absolute bottom-0 -right-32 h-[40vh] max-md:hidden max-lg:-right-20 ">
              <img src="/chef.svg" alt={""} className="w-[100%] h-[40vh]" />
            </div>
          </div>
        </div>
      </section>
      {/* premier section */}
      <section className="w-screen bg-orange-200 py-10">
        <div className="max-w-4xl max-xl:px-3 mx-auto flex  relative">
          <div className="absolute left-0 -bottom-20 max-md:hidden">
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
          <div className="w-[100%] max-md:hidden"></div>
          <div className="p-4">
            <img className="w-10 h-10" src="/vercel.svg" alt="" />

            <h1 className="font-bold py-4 text-md">Free Glass For Members</h1>
            <p className="text-xs font-light font-sans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              eos minus aspernatur temporibus debitis excepturi, quibusdam
            </p>
          </div>
          <div className="p-4">
            <img className="w-10 h-10" src="/vercel.svg" alt="" />

            <h1 className="font-bold py-4 text-md">Free Glass For Members</h1>
            <p className="text-xs font-light font-sans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              eos minus aspernatur temporibus debitis excepturi, quibusdam
            </p>
          </div>
        </div>
      </section>

      {/* popular Course */}
      <section className="max-w-4xl max-xl:px-3 mx-auto text-center py-20">
        {/* title Secyion */}
        <div className="mx-auto flex justify-evenly  relative py-8">
          <div className="w-12 h-12 bg-gradient-to-b from-amber-400 via-amber-100 to-amber-100 rounded-full absolute -top-3 -z-40 left-[17rem] opacity-30"></div>
          <h1 className="text-2xl relative font-bold ">Popular Course</h1>
        </div>

        <div className="py-6 grid grid-cols-4 gap-2">
          {/* grid 1 */}
          <div className="col-span-4 row-span-1 rounded-md shadow-2xl flex justify-between ">
            <div className="w-[200%]">
              <img
                src="/img1.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="px-10 py-2 text-start">
              <h1 className="font-bold py-3 text-xl">
                Traditional French Cuisine
              </h1>
              <p className="text-sm font-light py-2 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci corrupti ea maiores eveniet nesciunt! Ex nobis
                consequuntur deleniti fugiat sequi nam cupiditate, dolor
              </p>
              <div className="flex mt-5">
                <img
                  src="/avatar.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="mx-2">
                  <h1 className="font-bold text-sm">Salim Diallo</h1>
                  <p className="text-xs font-extralight italic">12 Mai 2000</p>
                </div>
              </div>
            </div>
          </div>
          {/* grid 2 */}
          <div className=" rounded-md shadow-2xl max-md:col-span-2">
            <div className="w-[100%]">
              <img src="/img2.jpg" alt="" className="rounded-md w-[100%]" />
            </div>
            <div className="px-2 py-2 text-start">
              <h1 className="font-bold py-3 text-sm">
                Traditional French Cuisine
              </h1>
              <p className="text-xs font-light py-1 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex mt-1">
                <img
                  src="/avatar.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div className="mx-2">
                  <h1 className="font-bold text-xs">Salim Diallo</h1>
                  <p className="text-xs font-extralight italic">12 Mai 2000</p>
                </div>
              </div>
            </div>
          </div>
          {/* grid 3 */}
          <div className="col-span-2 row-span-2 rounded-md shadow-2xl">
            <div className="w-full">
              <img src="/img3.jpg" alt="" className="rounded-md" />
            </div>
            <div className="px-10 py-2 text-start">
              <h1 className="font-bold py-3 text-xl">
                Traditional French Cuisine
              </h1>
              <p className="text-sm font-light py-2 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci corrupti ea maiores eveniet nesciunt! Ex nobis
                consequuntur deleniti fugiat sequi nam cupiditate, dolor
              </p>
              <div className="flex mt-5">
                <img
                  src="/avatar.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="mx-2">
                  <h1 className="font-bold text-sm">Salim Diallo</h1>
                  <p className="text-xs font-extralight italic">12 Mai 2000</p>
                </div>
              </div>
            </div>
          </div>
          {/* grid 4 */}
          <div className=" rounded-md shadow-2xl max-md:col-span-2">
            <div className="w-[100%]">
              <img src="/img4.jpg" alt="" className="rounded-md w-[100%]" />
            </div>
            <div className="px-2 py-2 text-start">
              <h1 className="font-bold py-3 text-sm">
                Traditional French Cuisine
              </h1>
              <p className="text-xs font-light py-1 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex mt-1">
                <img
                  src="/avatar.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div className="mx-2">
                  <h1 className="font-bold text-xs">Salim Diallo</h1>
                  <p className="text-xs font-extralight italic">12 Mai 2000</p>
                </div>
              </div>
            </div>
          </div>
          {/* grid 5 */}
          <div className=" rounded-md shadow-2xl max-md:col-span-2">
            <div className="w-[100%]">
              <img src="/img5.jpg" alt="" className="rounded-md w-[100%]" />
            </div>
            <div className="px-2 py-2 text-start">
              <h1 className="font-bold py-3 text-sm">
                Traditional French Cuisine
              </h1>
              <p className="text-xs font-light py-1 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex mt-1">
                <img
                  src="/avatar.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div className="mx-2">
                  <h1 className="font-bold text-xs">Salim Diallo</h1>
                  <p className="text-xs font-extralight italic">12 Mai 2000</p>
                </div>
              </div>
            </div>
          </div>
          {/* grid 6 */}
          <div className=" rounded-md shadow-2xl max-md:col-span-2">
            <div className="w-[100%]">
              <img src="/img6.jpg" alt="" className="rounded-md w-[100%]" />
            </div>
            <div className="px-2 py-2 text-start">
              <h1 className="font-bold py-3 text-sm">
                Traditional French Cuisine
              </h1>
              <p className="text-xs font-light py-1 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex mt-1">
                <img
                  src="/avatar.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div className="mx-2">
                  <h1 className="font-bold text-xs">Salim Diallo</h1>
                  <p className="text-xs font-extralight italic font-sans">
                    12 Mai 2000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our News */}
      <section className="max-w-4xl max-xl:px-3 mx-auto text-center py-20">
        {/* title Secyion */}
        <div className="mx-auto flex justify-evenly  relative py-7">
          <div className="w-12 h-12 bg-gradient-to-b from-amber-400 via-amber-100 to-amber-100 rounded-full absolute -top-3 -z-40 left-[17rem] opacity-30"></div>
          <h1 className="text-2xl relative font-bold ">Our News</h1>
        </div>
        <div className="flex justify-between max-sm:flex-wrap">
          {/* news bloc */}
          <div className="mx-4 shadow-2xl max-sm:my-5">
            <div>
              <img src="/img1.jpg" alt="" className="rounded-md" />
            </div>
            <div className="px-2 py-1 text-start">
              <h1 className="font-bold text-xl py-4">Elemy no graisse add</h1>
              <p className="font-sans font-light text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                sint qui placeat harum in id commodi quas laborum quidem unde
                blanditiis voluptatibus ea, explicabo,
              </p>
            </div>
          </div>
          {/* news bloc */}
          <div className="mx-4 shadow-2xl max-sm:my-5">
            <div>
              <img src="/img1.jpg" alt="" className="rounded-md" />
            </div>
            <div className="px-2 py-1 text-start">
              <h1 className="font-bold text-xl py-4">Elemy no graisse add</h1>
              <p className="font-sans font-light text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                sint qui placeat harum in id commodi quas laborum quidem unde
                blanditiis voluptatibus ea, explicabo,
              </p>
            </div>
          </div>
          {/* news bloc */}
          <div className="mx-4 shadow-2xl max-sm:my-5">
            <div>
              <img src="/img1.jpg" alt="" className="rounded-md" />
            </div>
            <div className="px-2 py-1 text-start">
              <h1 className="font-bold text-xl py-4">Elemy no graisse add</h1>
              <p className="font-sans font-light text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                sint qui placeat harum in id commodi quas laborum quidem unde
                blanditiis voluptatibus ea, explicabo,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="max-w-4xl max-xl:px-3 mx-auto text-center py-20">
        <div className="bg-orange-400 mx-auto flex flex-col max-w-2xl rounded-lg shadow-md py-8">
          <h1 className="text-3xl py-3 text-white">
            Be the first to get update of New Classes
          </h1>
          <form action="" className="flex items-center justify-center my-5">
            <input
              type="email"
              placeholder="Your email"
              className="w-[60%] h-10 rounded-sm border-none z-0 px-3 bg-slate-100 "
            />
            <input
              type="button"
              value="Subscribe Now"
              className="h-10 bg-white rounded-lg -ml-3 z-20 text-xs px-8"
            />
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="max-w-4xl max-xl:px-3 mx-auto text-center pt-20 pb-5">
        <div className="grid grid-cols-2  md:grid-cols-4 justify-center gap-2">
          {/* Contact */}
          <div className="px-3">
            <h1 className="font-bold text-xl py-4">Contact</h1>
            <ul className="text-xs font-sans font-light">
              <li className="py-1"> Street New York Usa</li>
              <li className="py-1">066 44 12 093</li>
              <li className="py-1">contact@food.com</li>
              <li className="py-1">www.adsa.com</li>
            </ul>
            {/* icons ..... */}
          </div>
          {/* Information */}
          <div className="px-3">
            <h1 className="font-bold text-xl py-4">Information</h1>
            <ul className="text-xs font-sans font-light">
              <li className="py-1">New Products</li>
              <li className="py-1">Top Sellers</li>
              <li className="py-1">Our Blog</li>
              <li className="py-1">About</li>
              <li className="py-1">Secure Shopping</li>
            </ul>
          </div>
          {/* Account */}
          <div className="px-3">
            <h1 className="font-bold text-xl py-4">Account</h1>
            <ul className="text-xs font-sans font-light">
              <li className="py-1">My Account</li>
              <li className="py-1">Personal Information</li>
              <li className="py-1">Adresse</li>
              <li className="py-1">Discount</li>
              <li className="py-1">Order History</li>
            </ul>
          </div>
          {/* Instagram */}
          <div className="px-3">
            <h1 className="font-bold text-xl py-4">Others</h1>
            <ul className="text-xs font-sans font-light">
              <li className="py-1">Promo</li>
              <li className="py-1">Partenariats</li>
              <li className="py-1">Why Me ?</li>
              <li className="py-1">Politiques</li>
              <li className="py-1">Securité</li>
            </ul>
            {/* icons ..... */}
          </div>
        </div>

        <div className="border-t  mt-4 pt-3">
          <p className="text-xs font-light ">
            &copy;copyright 2023 powered by{" "}
            <span className="text-orange-600 font-bold">Salim Diallo</span>
          </p>
        </div>
      </footer>
    </>
  );
}
