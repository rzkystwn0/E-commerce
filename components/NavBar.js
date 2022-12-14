import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#C4FDFE]">
          <div className="container flex items-center justify-between py-4 px-2">
            <div>
              <p className="font-black text-2xl sm:text-3xl">
                <a href="/">
                  <img src="/logo.png" className="sm:w-[80px] w-[45px]" />
                </a>
              </p>
            </div>
            <div className="w-8/12 flex bg-white  py-1 px-6 rounded-3xl">
              <input type="text" className="w-full outline-0" placeholder="Cari Produk kami" />
              <img src="/search.png" className="w-[20px] cursor-pointer" />
            </div>
            <div className="flex">
              <button className="sm:block hidden border-[#3A817E] border hover:bg-[#3A817E] text-[#3A817E] rounded-3xl poppins py-2 px-6 mx-2 transition duration-0 hover:duration-300 hover:text-white">Daftar</button>
              <button className="sm:block hidden bg-[#F8D94C] text-white poppins rounded-3xl py-2 px-6 mx-2">Masuk</button>
              <img src="/burger-menu.png" className="sm:hidden mx-2" onClick={() => setOpenNav(true)} />
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden fixed top-0 z-50 backdrop-blur-sm transition-all w-screen h-screen ${openNav ? "left-0" : "-left-full"}`}>
        <div className="flex flex-col w-5/12 mt-12">
          <button className=" border-[#3A817E] border hover:bg-[#3A817E] text-[#3A817E] rounded-3xl poppins my-2 py-2 px-6 mx-2 transition duration-0 hover:duration-300 hover:text-white">Daftar</button>
          <button className=" bg-[#F8D94C] text-white poppins my-2 rounded-3xl py-2 px-6 mx-2">Masuk</button>
        </div>
        <div className="absolute top-8 right-6">
          <Image src="/x.svg" width={25} height={25} onClick={() => setOpenNav(false)} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
