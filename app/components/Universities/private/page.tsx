"use client";

export default function PrivateUniversities() {

  const universities = [
    {
      id: 1,
      name: "TEAM University",
      description:
        "Entrepreneurial university focused on innovation, leadership, and global business education.",
      programs: "Business, IT, Entrepreneurship",
      established: "2020",
      website: "https://teamuni.uz",
    },
    {
      id: 2,
      name: "Central Asian University",
      description:
        "Modern private university offering English-based programs with international standards.",
      programs: "Medicine, Business, IT",
      established: "2019",
      website: "https://cau.uz",
    },
    {
      id: 3,
      name: "British Management University",
      description:
        "Private institution delivering British-style management and business education.",
      programs: "Management, Finance, Marketing",
      established: "2018",
      website: "https://bmu-edu.uz",
    },
    {
      id: 4,
      name: "IT Park University",
      description:
        "Technology-driven university preparing students for digital and software careers.",
      programs: "Software Engineering, AI, Cybersecurity",
      established: "2021",
      website: "https://itpu.uz",
    },
    {
      id: 5,
      name: "Webster University Tashkent",
      description:
        "American private university branch offering internationally recognized degrees.",
      programs: "Business Administration, Media Studies, IT",
      established: "2019",
      website: "https://webster.edu",
    },
    {
      id: 6,
      name: "Amity University Tashkent",
      description:
        "International private university with Indian roots and strong IT and engineering programs.",
      programs: "Computer Science, Business, Tourism",
      established: "2019",
      website: "https://amity.uz",
    },
    {
      id: 7,
      name: "Sharda University Uzbekistan",
      description:
        "Private international university offering diverse undergraduate programs.",
      programs: "Engineering, Business, Humanities",
      established: "2020",
      website: "https://sharda.uz",
    },
    {
      id: 8,
      name: "Management Development Institute of Singapore in Tashkent (MDIST)",
      description:
        "Singapore-based private institution offering British degrees in Uzbekistan.",
      programs: "Business, Banking & Finance, IT",
      established: "2007",
      website: "https://mdis.uz",
    },
    {
      id: 9,
      name: "Bucheon University in Tashkent",
      description:
        "Korean private university branch specializing in practical and technical education.",
      programs: "Architecture, Korean Studies, Business",
      established: "2018",
      website: "https://but.uz",
    },
    {
      id: 10,
      name: "Yeoju Technical Institute in Tashkent",
      description:
        "South Korean private university branch focused on applied technical education.",
      programs: "Architecture, IT, Korean Language",
      established: "2018",
      website: "https://ytit.uz",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DEEFE7] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002333] mb-4">
            Private Universities in Tashkent
          </h1>
          <p className="text-[#002333] text-lg max-w-2xl mx-auto">
            Explore modern private universities offering international
            programs and innovative education opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#002333] mb-3">
                  {uni.name}
                </h2>
                <p className="text-[#002333] mb-4">
                  {uni.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-[#159A9C] font-semibold">
                    Established:
                  </p>
                  <p className="text-[#002333]">{uni.established}</p>
                </div>

                <div>
                  <p className="text-sm text-[#159A9C] font-semibold">
                    Popular Programs:
                  </p>
                  <p className="text-[#002333]">{uni.programs}</p>
                </div>
              </div>

              <button
                onClick={() => window.open(uni.website, "_blank")}
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
