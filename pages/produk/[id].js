import React from "react";
import NavBar from "../../components/NavBar";

function produk() {
  return (
    <>
      <NavBar />
      <div className="mt-24"></div>
      <div className="container md:flex my-6">
        <div className="md:w-6/12">
          <img src="/produk1.jpg" className="aspect-square bg-cover w-12/12 md:rounded-2xl" />
        </div>
        <div className="md:w-6/12 px-4">
            <p className="text-2xl poppins my-2">Nama Produk</p>
            <p className="text-xl poppins my-2 font-semibold">Rp.12000</p>
            <button className="text-white poppins bg-[#F8D94C] py-4 px-16 rounded-xl md:block hidden my-16">Beli</button>
        </div>
      </div>
      <button className="text-white poppins bg-[#F8D94C] py-4 px-16 md:hidden fixed bottom-0 left-0 right-0">Beli</button>
    </>
  );
}

export default produk;
