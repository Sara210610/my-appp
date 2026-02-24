"use client";

export default function PublicSchools() {

  const schools = [
    {
      id: 1,
      name: "School No. 110 (Yunusabad District)",
      description:
        "State secondary school providing general education based on the national curriculum.",
      programs: "Uzbek National Curriculum, Mathematics, Languages",
      established: "1985",
    },
    {
      id: 2,
      name: "School No. 81 (Mirzo-Ulugbek District)",
      description:
        "Public school known for strong academic performance and experienced teaching staff.",
      programs: "National Curriculum, English, Science",
      established: "1972",
    },
    {
      id: 3,
      name: "Specialized State School No. 144",
      description:
        "Public specialized school focusing on advanced foreign language education.",
      programs: "English, Foreign Languages, Humanities",
      established: "1998",
    },
    {
      id: 4,
      name: "Specialized School for ICT No. 1",
      description:
        "State school specializing in information technologies and mathematics.",
      programs: "Mathematics, IT, Programming Basics",
      established: "2017",
    },
    {
      id: 5,
      name: "School No. 50 (Chilanzar District)",
      description:
        "General public school providing comprehensive secondary education.",
      programs: "Uzbek National Curriculum, Science, Literature",
      established: "1980",
    },
    {
      id: 6,
      name: "Specialized State School No. 145",
      description:
        "Public institution with advanced STEM-focused curriculum.",
      programs: "Mathematics, Physics, Technology",
      established: "2005",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DEEFE7] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002333] mb-4">
            Public Schools in Tashkent
          </h1>
          <p className="text-[#002333] text-lg max-w-2xl mx-auto">
            Explore state schools offering nationally approved education
            programs and strong academic foundations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#002333] mb-3">
                  {school.name}
                </h2>
                <p className="text-[#002333] mb-4">
                  {school.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-[#159A9C] font-semibold">
                    Established:
                  </p>
                  <p className="text-[#002333]">{school.established}</p>
                </div>

                <div>
                  <p className="text-sm text-[#159A9C] font-semibold">
                    Programs:
                  </p>
                  <p className="text-[#002333]">{school.programs}</p>
                </div>
              </div>

              <button
                onClick={() => window.open(school.website, "_blank")}
                className="mt-6 bg-[#159A9C] text-white py-3 rounded-full font-medium hover:bg-[#002333] transition duration-300"
              >
                Visit Website
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}