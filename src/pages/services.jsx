import { ArrowUpRight, BadgeCheck } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-[100px] hero-main">
        <div className="custom-container">
          <div className="grid md:grid-cols-3 gap-10 items-center w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-white">Services</h1>
              <p className="!text-white">Home / Services</p>
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

      {/* Cards */}
      <section className="my-[100px]">
        <div className="custom-container">
          <div className="flex flex-col justify-center items-center text-center mb-10">
            <div className="section-title-bage">
              <span>Services</span>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="gradiant-hover-card">
              <div className="card p-6 flex flex-col gap-4">
                <div className="icon text-primary">
                  <BadgeCheck size={60} className="mb-[40px]" />
                </div>
                <h4 className="text-primary">hello world</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum, voluptatibus.
                </p>
                <a href="" className="flex gap-2 items-center text-primary">
                  Check Now <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="gradiant-hover-card">
              <div className="card p-6 flex flex-col gap-4">
                <div className="icon text-primary">
                  <BadgeCheck size={60} className="mb-[40px]" />
                </div>
                <h4 className="text-primary">hello world</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum, voluptatibus.
                </p>
                <a href="" className="flex gap-2 items-center text-primary">
                  Check Now <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="gradiant-hover-card">
              <div className="card p-6 flex flex-col gap-4">
                <div className="icon text-primary">
                  <BadgeCheck size={60} className="mb-[40px]" />
                </div>
                <h4 className="text-primary">hello world</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum, voluptatibus.
                </p>
                <a href="" className="flex gap-2 items-center text-primary">
                  Check Now <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="gradiant-hover-card">
              <div className="card p-6 flex flex-col gap-4">
                <div className="icon text-primary">
                  <BadgeCheck size={60} className="mb-[40px]" />
                </div>
                <h4 className="text-primary">hello world</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum, voluptatibus.
                </p>
                <a href="" className="flex gap-2 items-center text-primary">
                  Check Now <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="gradiant-hover-card">
              <div className="card p-6 flex flex-col gap-4">
                <div className="icon text-primary">
                  <BadgeCheck size={60} className="mb-[40px]" />
                </div>
                <h4 className="text-primary">hello world</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum, voluptatibus.
                </p>
                <a href="" className="flex gap-2 items-center text-primary">
                  Check Now <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="gradiant-hover-card">
              <div className="card p-6 flex flex-col gap-4">
                <div className="icon text-primary">
                  <BadgeCheck size={60} className="mb-[40px]" />
                </div>
                <h4 className="text-primary">hello world</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum, voluptatibus.
                </p>
                <a href="" className="flex gap-2 items-center text-primary">
                  Check Now <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
