import Head from "next/head";
import React from "react";
import NavBar from "../../components/NavBar";

function produk(props) {
  const produk = [
    {
      nama: "Desain Sticker",
      img: "prod6",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Sticker",
      img: "prod7",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Card",
      img: "prod8",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Gelas",
      img: "prod9",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Sticker",
      img: "prod10",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Card",
      img: "prod1",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain T Shirt",
      img: "prod2",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Gelas",
      img: "prod3",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Pin",
      img: "prod4",
      hrg: "XXXXXX",
    },
    {
      nama: "Desain Sticker",
      img: "prod5",
      hrg: "XXXXXX",
    },
  ];

  const prod = produk.filter(function (el) {
    return el.img == props.keyword;
  });

  return (
    <>
    <Head>
        <title>{prod[0].nama} - E Commerce</title>
      </Head>
      <NavBar />
      <div className="mt-24"></div>
      <div className="container md:flex my-6">
        <div className="md:w-6/12">
          <img src={`/${prod[0].img}.jpg`} className="aspect-square bg-cover w-12/12 md:rounded-2xl" />
        </div>
        <div className="md:w-6/12 px-4">
          <p className="text-2xl poppins my-2">{prod[0].nama}</p>
          <p className="text-xl poppins my-2 font-semibold">{prod[0].hrg}</p>
          <button className="text-white poppins bg-[#F8D94C] py-4 px-16 rounded-xl md:block hidden my-16">Beli</button>
        </div>
      </div>
      <button className="text-white poppins bg-[#F8D94C] py-4 px-16 md:hidden fixed bottom-0 left-0 right-0">Beli</button>
    </>
  );
}

export default produk;

export async function getServerSideProps(ctx) {
  return {
    props: {
      keyword: ctx.query.id,
    },
  };
}
