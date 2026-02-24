"use client";

import { useRouter } from "next/navigation";

export default function SchoolsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#DEEFE7] flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#002333] mb-6">
          Schools in Tashkent
        </h1>
        <p className="text-[#002333] text-lg mb-14">
          Choose the type of school you would like to explore.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Private Schools Card */}
          <div
            onClick={() => router.push("/components/Schools/private")}
            className="cursor-pointer bg-white rounded-3xl shadow-lg p-12 hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <div className="text-6xl mb-6">📚</div>
            <h2 className="text-2xl font-bold text-[#002333] mb-4">
              Private Schools
            </h2>
            <p className="text-[#002333]">
              Explore international and private schools offering modern
              curricula, foreign languages, and global academic standards.
            </p>
          </div>

          {/* Public Schools Card */}
          <div
            onClick={() => router.push("/components/Schools/public")}
            className="cursor-pointer bg-white rounded-3xl shadow-lg p-12 hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <div className="text-6xl mb-6">🏫</div>
            <h2 className="text-2xl font-bold text-[#002333] mb-4">
              Public Schools
            </h2>
            <p className="text-[#002333]">
              Discover state schools providing nationally approved
              education programs and strong academic foundations.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}