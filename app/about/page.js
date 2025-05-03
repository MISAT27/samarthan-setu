
"use client"
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "establishment",
    title: "Who We Are",
    content: `Established in 2025, Samarthan Setu is an Indian development organization, impacting over 15 lakh children and families every year. We seek support to provide food, shelter, healthcare, and a nurturing environment across India.

Samarthan Setu works as a catalyst in the cycle of change, complementing government efforts to achieve the Sustainable Development Goals. We partner with like-minded individuals and institutions to implement impactful programs that enable access, enhance quality, and promote long-term behavioral change.`,
  },
  {
    id: "story",
    title: "Our Story",
    content: `Samarthan Setu was initiated in 2025 by a group of friends inspired by Peter Senge’s philosophy of business-driven social change.

Liberalization of the 1990s brought economic prosperity, allowing professionals to contribute beyond survival. With passion, our founders built Samarthan Setu into a ground-level social institution. We've consistently innovated and taken the road less traveled, striving for civic-driven change and impactful delivery.`,
  },
  {
    id: "vision",
    title: "Vision",
    content: `Be the best NGO in India.
Work as a catalyst in bringing sustainable change to underprivileged lives through a life-cycle development approach.

Enable global civil society to engage in change through Civic Driven Change.

Adopt the highest standards of governance to emerge as a tech-driven, scalable development institution.`,
  },
  {
    id: "mission",
    title: "Mission",
    content: `Our mission is to provide food, shelter, and healthcare to underprivileged communities while promoting the value of resource conservation.

We empower children, youth, and women through education, healthcare, and market-driven livelihood programs. We aim to link corporate social responsibility with grassroots development and promote good governance and civic awareness.`,
  },
  {
    id: "philosophy",
    title: "Philosophy of Change",
    content: `We focus on sustainable impact through community engagement and social responsibility. Our Civic Driven Change approach makes civil society a vital partner in all welfare efforts, broadening our reach beyond direct beneficiaries.`,
  },
  {
    id: "lifecycle",
    title: "The Lifecycle Approach",
    content: `Education is both the means and the goal to a better life. It empowers individuals, spreads awareness, and builds strong foundations. This breaks the cycle of poverty, disease, and ignorance, helping children grow into informed, capable citizens.`,
  },
  {
    id: "trust",
    title: "Why Trust Us",
    content: `We uphold credibility and accountability with a four-tier audit and evaluation mechanism. This ensures impactful investment and transparency in fund usage, reinforcing our governance principles.`,
  },
];

const About = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const revealSections = () => {
      sectionRefs.current.forEach((section) => {
        if (section && section.getBoundingClientRect().top < window.innerHeight - 50) {
          section.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();

    return () => window.removeEventListener("scroll", revealSections);
  }, []);

  return (
    <>
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl text-center text-lime-600 font-bold mb-12">About Samarthan Setu</h1>
      {sections.map((sec, index) => (
        <section
          key={sec.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="mb-10 bg-white p-6 border-l-4 border-lime-500 shadow-md rounded-lg opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="text-2xl text-lime-600 font-semibold mb-4">{sec.title}</h2>
          <p className="whitespace-pre-line text-gray-700">{sec.content}</p>
        </section>
      ))}


    </div>
    <Footer/>
    </>

  );
};

export default About;
