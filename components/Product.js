import { Router } from "next/router";

function Product({title}) {

  function detailProduk(id){
      Router.push({
        pathname: `/produk/${id}`,
      });
  }

  return (
    <div className="container sm:mt-20 mt-4">
      <div className="w-12/12 bg-gray-100 h-1"></div>
      <p className="font-bold text-lg my-8 mx-2">{title}</p>
      <div className="flex  justify-between overflow-x-auto  w-12/12 scrollbar-hide snap-mandatory snap-x">
        <div className="sm:mx-6 mx-4 w-6/12 snap-start sm:scroll-ml-6 scroll-ml-4 cursor-pointer">
          <div className="border sm:w-64 w-40 rounded-2xl mx-auto drop-shadow-2xl pb-12 ">
            <a href="/produk/241">

            <img src="/produk1.jpg" alt="" className="aspect-square bg-cover sm:w-64 w-12/12 rounded-t-2xl" />
            <div className="mx-2">
              <p className="poppins py-1 ">Nama barang</p>
              <p className="poppins py-1 font-semibold">Rp.12000</p>
            </div>
            </a>
          </div>
        </div>
        <div className="sm:mx-6 mx-4 w-6/12 snap-start sm:scroll-ml-6 scroll-ml-4 cursor-pointer">
          <div className="border sm:w-64 w-40 rounded-2xl mx-auto drop-shadow-2xl pb-12 ">
            <a href="/produk/241">

            <img src="/produk1.jpg" alt="" className="aspect-square bg-cover sm:w-64 w-12/12 rounded-t-2xl" />
            <div className="mx-2">
              <p className="poppins py-1 ">Nama barang</p>
              <p className="poppins py-1 font-semibold">Rp.12000</p>
            </div>
            </a>
          </div>
        </div>
        <div className="sm:mx-6 mx-4 w-6/12 snap-start sm:scroll-ml-6 scroll-ml-4 cursor-pointer">
          <div className="border sm:w-64 w-40 rounded-2xl mx-auto drop-shadow-2xl pb-12 ">
            <a href="/produk/241">

            <img src="/produk1.jpg" alt="" className="aspect-square bg-cover sm:w-64 w-12/12 rounded-t-2xl" />
            <div className="mx-2">
              <p className="poppins py-1 ">Nama barang</p>
              <p className="poppins py-1 font-semibold">Rp.12000</p>
            </div>
            </a>
          </div>
        </div>
        <div className="sm:mx-6 mx-4 w-6/12 snap-start sm:scroll-ml-6 scroll-ml-4 cursor-pointer">
          <div className="border sm:w-64 w-40 rounded-2xl mx-auto drop-shadow-2xl pb-12 ">
            <a href="/produk/241">

            <img src="/produk1.jpg" alt="" className="aspect-square bg-cover sm:w-64 w-12/12 rounded-t-2xl" />
            <div className="mx-2">
              <p className="poppins py-1 ">Nama barang</p>
              <p className="poppins py-1 font-semibold">Rp.12000</p>
            </div>
            </a>
          </div>
        </div><div className="sm:mx-6 mx-4 w-6/12 snap-start sm:scroll-ml-6 scroll-ml-4 cursor-pointer">
          <div className="border sm:w-64 w-40 rounded-2xl mx-auto drop-shadow-2xl pb-12 ">
            <a href="/produk/241">

            <img src="/produk1.jpg" alt="" className="aspect-square bg-cover sm:w-64 w-12/12 rounded-t-2xl" />
            <div className="mx-2">
              <p className="poppins py-1 ">Nama barang</p>
              <p className="poppins py-1 font-semibold">Rp.12000</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
