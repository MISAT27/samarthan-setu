"use client";
import Image from "next/image";
import { useState } from "react";
import InputText from "@/components/InputText";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
// import { Righteous } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";

import { useSession } from "next-auth/react";

// const righteous = Righteous({
//   variable: "--font-righteous",
//   weight: "400",
// });

const programs = [
  {
    title: "Food Support",
    description: "Providing meals to families in need through verified NGOs.",
    image: "/project/images/img2.jpg",
    alt: "Food Support Image",
  },
  {
    title: "Educational Aid",
    description: "Books, uniforms, and scholarships for underprivileged children.",
    image: "/project/images/imga.jpg",
    alt: "Educational Aid Image",
  },
  {
    title: "Medical Help",
    description: "Support for medicines, treatments, and healthcare camps.",
    image: "/project/images/imgb.jpg",
    alt: "Medical Help Image",
  },
  {
    title: "Donation Support",
    description: "Contribute funds or items to uplift communities in need.",
    image: "/project/images/imgC.jpg",
    alt: "Donation Support Image",
  },
];

export default function Home() {
  // const [name, setName] = useState("");
  const {data: session, status } = useSession();

  return (
    <div className="bg-[#F0F1E7]">
      <Navbar />
      <div className="">
        <Carousel />
      </div>


{/* 
    {session && (
      <>Hello {session.user.name}</>
    )} */}
      {/* <div className=" py-8 p-4 bg-white flex flex-col justify-center items-center gap-8">
        <div className="text-6xl font-extrabold bg-gradient-to-r from-[#2376F3] via-[#1BB4B5] to-[#14EF7B] text-transparent bg-clip-text">
          JOIN US IN MAKING A DIFFERENCE
        </div>
        <div className="text-2xl">
          Learn how you can contribute to our mission
        </div>
        <InputText
          placeholder="Enter your Email..."
          icon={EnvelopeIcon}
          type="email"
        />
        <Link href="/signup">
          <button
            className="h-10 flex items-center justify-between px-8 bg-[#A2EEC6] text-black py-6 rounded-full font-semibold transition outline-0"
            style={{ transition: "all .15s ease" }}
          >
            Sign Up
          </button>
          <LogoutButton />
        </Link>
      </div> */}



      
      <section className="py-10">
        <h2 className="mt-10 text-3xl font-bold text-center mb-2">
          <span className="text-black">Our</span>{" "}
          <span className="text-[#73A40D]">Programs</span>
        </h2>

        <div className="text-center max-w-4xl mx-auto px-4 mt-4">
          <p className="text-lg text-gray-700">
            Empowering lives through focused initiatives that address hunger,
            education, healthcare, and financial support — one step at a time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={program.image}
                  />
                </div>

                <div className="p-4 h-[170px] border-b-4 border-[#94c13d] flex flex-col items-center">
                  <h3 className="relative inline-block group text-xl font-semibold pb-2 text-black text-center">
                    {program.title}
                    {/* Animated underline */}
                    <span className="absolute left-1/2 bottom-[-4px] h-[3px] w-3 bg-[#94c13d] transition-all duration-300 transform -translate-x-1/2 group-hover:w-14"></span>
                    <span className="absolute left-1/2 bottom-[-10px] h-[3px] w-10 bg-[#94c13d] transform -translate-x-1/2"></span>
                  </h3>
                  <p className="mt-9 text-justify text-gray-700">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* section hain ye */}
      <section id="donate" className="mt-8 bg-[#94c13d] py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Support Our Cause
        </h2>

        <Link href="/donate">
          <button
            id="donateBtn"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full bg-transparent hover:bg-white hover:text-[#94c13d] transition duration-300"
          >
            Donate
          </button>
        </Link>

      </section>
      <Footer />
    </div>
  );
}
