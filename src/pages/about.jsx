import React from "react";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-[100px] hero-main">
        <div className="custom-container">
          <div className="grid md:grid-cols-3 gap-10 items-center w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-white">About Us</h1>
              <p className="!text-white">Home / About</p>
            </div>
            <div className="md:block hidden"></div>
            <div className="banner-img">
              <div className="banner-icon banner-icon-1 w-20 h-20">
                <img src="/assets/imgs/microphone.svg" alt="" />
              </div>
              <div className="banner-icon banner-icon-2 w-20 h-20">
                <img src="/assets/imgs/target.svg" alt="" />
              </div>
              <img
                src="/assets/imgs/hero-img.png"
                className="w-full h-full max-w-[300px] ms-auto relative z-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
