"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "Universities",
      text: "Don't know where to apply after finishing secondary education? Explore successful universities and start your application now!",
      image: "unies.jpg",
      href: "/components/Universities",
      more: "More"
    },

    {
      id: 2,
      title: "Schools",
      text: "Explore different schools in Tashkent whether it's to start your childs education or to transfer to a different school.",
      image: "school.jpg",
      href: "/components/Schools",
      more: "More"
    },

    {
      id: 3,
      title: "Extracurriculars",
      text: "Having extra time after school hours? Find the perfect extracurricular, based on your interests, to beneficially use your time. ",
      image: "learning.jpg",
      href: "/components/Extracurriculars",
      more: "More"
    },

    {
      id: 4,
      title: "Coworking zones",
      text: "Can't reach your full working potential from working at home? Find the perfect coworking zone to get your job done, whether its by yourself or with your team.",
      image: "coworking.jpg",
      href: "/components/Coworking",
      more: "More"
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen flex flex-col">

      {/* Karusel */}
      <section className="relative w-full h-[75vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${index === current
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-[#002333]/30 backdrop-blur-md rounded-[30px] sm:rounded-[40px] p-6 sm:p-12 text-center max-w-xs sm:max-w-2xl md:max-w-3xl border border-white/20 shadow-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  {slide.title}
                </h1>
                <p className="text-[#DEEFE7] text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                  {slide.text}
                </p>
                <Link href={slide.href}
                  className="inline-block bg-[#159A9C] text-white px-5 py-2 rounded-full hover:bg-[#B4BEC9] hover:text-[#002333] hover:shadow-lg hover:scale-105 transition-all duration-300">
                  {slide.more}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Strelki */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-3 bg-black/30 rounded-full hover:bg-black/50 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-3 bg-black/30 rounded-full hover:bg-black/50 transition"
        >
          ❯
        </button>
      </section>




      <section className="py-20 bg-[#159A9C]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#DEEFE7] text-[#002333] text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-[#002333] mb-2">Choose Category</h3>
              <p className="text-[#002333] text-center">Select whether you want universities, schools, or extracurricular activities to explore.</p>
            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#DEEFE7] text-[#002333] text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-[#002333] mb-2">Find & Compare</h3>
              <p className="text-[#002333] text-center">Explore the options, read descriptions, and compare different schools or universities easily.</p>
            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#DEEFE7] text-[#002333] text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-[#002333] mb-2">Get Started</h3>
              <p className="text-[#002333] text-center">Follow the instructions to apply, register, or join the activity that fits your goals.</p>
            </div>
          </div>
        </div>
      </section>




      <section className="py-20 bg-[#DEEFE7]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#002333] mb-12">
            Explore Categories
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Universities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#159A9C] text-white text-2xl font-bold mb-4">
                🎓
              </div>
              <h3 className="text-xl font-semibold text-[#002333] mb-2">
                Universities
              </h3>
              <p className="text-[#002333]/80 text-center mb-6">
                Discover top universities, compare programs, and start your
                higher education journey.
              </p>
              <Link href="/components/Universities">
                <button className="bg-[#159A9C] text-white px-5 py-2 rounded-full hover:bg-[#B4BEC9] transition duration-300">
                  More
                </button>
              </Link>
            </div>

            {/* Schools */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#159A9C] text-white text-2xl font-bold mb-4">
                🏫
              </div>
              <h3 className="text-xl font-semibold text-[#002333] mb-2">
                Schools
              </h3>
              <p className="text-[#002333]/80 text-center mb-6">
                Find the best schools for your child or explore transfer
                opportunities in your city.
              </p>
              <Link href="/components/Schools">
                <button className="bg-[#159A9C] text-white px-5 py-2 rounded-full hover:bg-[#B4BEC9] transition duration-300">
                  More
                </button>
              </Link>
            </div>

            {/* Extracurriculars */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#159A9C] text-white text-2xl font-bold mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-[#002333] mb-2">
                Extracurriculars
              </h3>
              <p className="text-[#002333]/80 text-center mb-6">
                Explore clubs, courses, and creative activities to grow your
                skills beyond academics.
              </p>
              <Link href="/components/Extracurriculars">
                <button className="bg-[#159A9C] text-white px-5 py-2 rounded-full hover:bg-[#B4BEC9] transition duration-300">
                  More
                </button>
              </Link>
            </div>

            {/* Coworking Zones */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#159A9C] text-white text-2xl font-bold mb-4">
                💻
              </div>
              <h3 className="text-xl font-semibold text-[#002333] mb-2">
                Coworking Zones
              </h3>
              <p className="text-[#002333]/80 text-center mb-6">
                Find productive coworking spaces to work individually or
                collaborate with your team.
              </p>
              <Link href="/components/Coworking">
                <button className="bg-[#159A9C] text-white px-5 py-2 rounded-full hover:bg-[#B4BEC9] transition duration-300">
                  More
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>




      <section className="py-20 bg-[#159A9C] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-5xl font-extrabold">120+</h3>
              <p className="text-lg mt-2">Schools Listed</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold">45+</h3>
              <p className="text-lg mt-2">Universities</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold">5000+</h3>
              <p className="text-lg mt-2">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold">25+</h3>
              <p className="text-lg mt-2">Coworking Zones</p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-[#DEEFE7]">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="text-4xl font-bold mb-6 text-[#002333]">Stay Updated</h2>
          <p className="text-[#002333] text-lg mb-8">Subscribe to our newsletter and never miss updates about schools, universities, and extracurricular activities.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input type="email" placeholder="Your email" className="p-4 rounded-full border border-[#159A9C] flex-1 focus:outline-none" />
            <button className="bg-[#159A9C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#B4BEC9] hover:text-[#DEEFE7] transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
