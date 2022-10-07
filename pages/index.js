import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Product from "../components/Product";

export default function Home() {
  const [showAlert, setShowAlert] = useState(true);

  const Produk1 = [
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

  const Produk2 = [
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
  ];

  function alertShowing() {
    return (
      <div className="h-screen w-screen z-50 fixed top-0 left-0 right-0 bg-black/60">
        <Head>
          <title>DKV E Commerce</title>
        </Head>
        <div className="h-screen w-screen flex items-center">
          <div className="sm:w-6/12 w-11/12 bg-white rounded-2xl mx-auto">
            <img src="alert.jpg" alt="" className="aspec-video rounded-t-2xl bg-cover" />
            <button className="bg-blue-600 text-white poppins py-4 w-full rounded-b-xl" onClick={() => setShowAlert(false)}>
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="mt-24"></div>
      <Banner />
      <Product title="Produk Official DKV" produk={Produk1} />
      <Product title="Rekomendasi" produk={Produk2} />
      <Footer />
      {showAlert === true ? alertShowing() : ""}
    </>
  );
}
