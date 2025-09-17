import { Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-[100px] hero-main">
        <div className="custom-container">
          <div className="grid md:grid-cols-3 gap-10 items-center w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-white">Contact Us</h1>
              <p className="!text-white">Home / Contact</p>
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

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="custom-container">
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-2xl text-black font-bold mb-6">
                Get in Touch
              </h4>
              {submitted && (
                <div className="mb-4 text-green-600 text-center font-medium">
                  ✅ Thank you! Your message has been sent.
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border w-full border-gray-300 text-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="border w-full border-gray-300 text-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 text-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 text-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button type="submit" className="">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h4 className="text-2xl text-black font-bold mb-6">
                Let’s Connect Empower And Your Business
              </h4>
              <div className="flex gap-2 flex-col">
                <div className="bg-gray-100 p-4 rounded-xl flex gap-3 items-center">
                  <div className="w-18 h-18 bg-white rounded-full text-primary flex justify-center items-center">
                    <Phone size={40} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Give us a call</p>
                    <p className="!text-xl font-semibold text-black mt-2">
                      123-456-789
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl flex gap-3 items-center">
                  <div className="w-18 h-18 bg-white rounded-full text-primary flex justify-center items-center">
                    <Phone size={40} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Give us a call</p>
                    <p className="!text-xl font-semibold text-black mt-2">
                      123-456-789
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl flex gap-3 items-center">
                  <div className="w-18 h-18 bg-white rounded-full text-primary flex justify-center items-center">
                    <Phone size={40} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Give us a call</p>
                    <p className="!text-xl font-semibold text-black mt-2">
                      123-456-789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
