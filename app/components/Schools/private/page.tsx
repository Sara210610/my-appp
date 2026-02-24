"use client";

export default function PrivateSchools() {

  const schools = [
    {
      id: 1,
      name: "Tashkent International School (TIS)",
      description:
        "Leading international school offering IB programs with a diverse global community.",
      programs: "IB Primary Years, Middle Years, Diploma Programme",
      established: "1994",
      website: "https://tashschool.org",
    },
    {
      id: 2,
      name: "British School of Tashkent",
      description:
        "Private international school delivering the British curriculum in English.",
      programs: "Cambridge Curriculum, IGCSE, A-Levels",
      established: "2010",
      website: "https://britishschool.uz",
    },
    {
      id: 3,
      name: "Cambridge International School Tashkent",
      description:
        "Modern private school providing Cambridge-based education standards.",
      programs: "Primary, Lower Secondary, IGCSE",
      established: "2017",
      website: "https://cambridge.uz",
    },
    {
      id: 4,
      name: "International School of Tashkent (IST)",
      description:
        "Private school focused on academic excellence and multilingual education.",
      programs: "International Curriculum, English & Russian Streams",
      established: "2009",
      website: "https://ist.uz",
    },
    {
      id: 5,
      name: "Invento International School",
      description:
        "Innovative private school offering international programs with modern facilities.",
      programs: "International Primary & Secondary Education",
      established: "2016",
      website: "https://invento.uz",
    },
    {
      id: 6,
      name: "Sehriyo School",
      description:
        "Private school providing quality national and international curriculum education.",
      programs: "Uzbek National Curriculum, English Programs",
      established: "2000",
      website: "https://sehriyo.uz",
    },
    {
      id: 7,
      name: "Presidential School in Tashkent (Private Track Programs)",
      description:
        "Elite school known for strong STEM and leadership-focused education.",
      programs: "Advanced STEM, English-based Education",
      established: "2019",
      website: "https://piima.uz",
    },
    {
      id: 8,
      name: "Erudite Education School",
      description:
        "Private school emphasizing innovation, foreign languages, and technology.",
      programs: "English, IT, Business Foundations",
      established: "2015",
      website: "https://erudite.uz",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DEEFE7] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002333] mb-4">
            Private Schools in Tashkent
          </h1>
          <p className="text-[#002333] text-lg max-w-2xl mx-auto">
            Explore leading private schools offering international curricula,
            multilingual education, and modern learning environments.
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
