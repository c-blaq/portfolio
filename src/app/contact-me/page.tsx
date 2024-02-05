import { Metadata } from "next";
import React from "react";
import Input from "@/components/contact/Input";
import Hero from "@/components/shared/Hero";
import contactImg from "@/assets/png/contact.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Fathi Babayeju",
  description: "Have an awesome project idea? Let's discuss",
};

function ContactMe() {
  return (
    <>
      <Hero
        heroText1="Contact"
        heroText2="Me"
        description="Ready to take your project to the next level? Look no further! Get in touch today to discuss how I can help you achieve your project goals. With a proven track record of delivering exceptional projects, I am ready to collaborate and transform your ideas into reality."
        showContactLink={false}
      />
      <div className="">
        <div className="max-w-7xl mx-auto py-10 md:py-20 px-5 2xl:px-0">
          <h2 className="text-2xl text-center lg:text-left sm:text-4xl lg:text-6xl font-bigShoulder leading-[140%] uppercase font-bold">
            Get in touch
          </h2>

          <div className="mt-5  sm:mt-10 flex gap-5 justify-between">
            <form className="flex-1 max-w-xl mx-auto">
              <div className="grid sm:grid-cols-2 sm:gap-5">
                <Input
                  id="firstName"
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                />
                <Input
                  id="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
              />

              <div>
                <label htmlFor="message" className="text-xs">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-primary focus-visible:bg-primary-dark2 outline-none p-2 w-full h-32 text-white border border-[rgba(255,255,255,0.20)] resize-none"
                />
              </div>

              <button className="w-full p-2 rounded-sm text-textGray bg-secondary-blue hover:bg-secondary-blue-light mt-8">
                Send Message
              </button>
            </form>

            <div className="flex-1 max-h-[400px] hidden lg:block">
              <Image
                src={contactImg}
                alt="hand on laptop keyboard"
                className="h-full w-full  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
