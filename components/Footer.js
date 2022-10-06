function Footer() {
  
  return (
    <>
      <div className="bg-[#8691A0]">
        <div className="mt-32 sm:py-20 mb-8">
          <div className="md:flex container text-white popppins">
            <div className="md:w-4/12 md:mx-8">
              <img src="logo2.png" alt="" />
            </div>
            <div className="md:w-4/12 md:mx-8 px-4">
              <p className="font-medium text-xl my-4">Tentang Kami</p>
              <p className="text-white/70">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>
            <div className="md:w-4/12 md:mx-8 px-4">
              <p className="font-medium text-xl my-4">Sosial Media</p>
              <div>
                <div className="my-3">
                  <a className="flex" href="https://www.youtube.com/" target="_blank">
                    <img src="yt.png" className="mr-2" alt="" />
                    Youtube
                  </a>
                </div>
                <div className="my-3">
                  <a className="flex" href="https://www.instagram.com/" target="_blank">
                    <img src="ig.png" className="mr-2" alt="" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-[#565656] sm:py-6 py-4 poppins text-white text-xs">
          <p>
            COPYRIGHT © 2022. Developed by{" "}
            <a href="https://rzkystwn.netlify.app/" className="italic underline" target="_blank">
              Rizky Setiawan.
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
