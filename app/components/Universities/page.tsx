"use client";

import { useRouter } from "next/navigation";

export default function UniversitiesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#DEEFE7] flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#002333] mb-6">
          Universities in Tashkent
        </h1>
        <p className="text-[#002333] text-lg mb-14">
          Choose the type of university you would like to explore.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

         
          <div
            onClick={() => router.push("/components/Universities/private")}
            className="cursor-pointer bg-white rounded-3xl shadow-lg p-12 hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <div className="text-6xl mb-6">🎓</div>
            <h2 className="text-2xl font-bold text-[#002333] mb-4">
              Private Universities
            </h2>
            <p className="text-[#002333]">
              Explore modern, internationally-focused private universities
              offering innovative programs and global opportunities.
            </p>
          </div>

          {/* Public Universities Card */}
          <div
            onClick={() => router.push("/components/Universities/public")}
            className="cursor-pointer bg-white rounded-3xl shadow-lg p-12 hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <div className="text-6xl mb-6">🏛</div>
            <h2 className="text-2xl font-bold text-[#002333] mb-4">
              Public Universities
            </h2>
            <p className="text-[#002333]">
              Discover state universities with long academic traditions
              and nationally recognized degrees.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
