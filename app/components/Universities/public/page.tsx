"use client";

export default function PublicUniversities() {
  const universities = [
    {
      id: 1,
      name: "National University of Uzbekistan",
      description:
        "One of the oldest and most prestigious public universities in Uzbekistan with a strong academic tradition.",
      programs: "Mathematics, Physics, Law, Journalism, Biology",
      established: "1918",
    },
    {
      id: 2,
      name: "Tashkent State Technical University",
      description:
        "Leading university specializing in engineering and technical sciences.",
      programs: "Engineering, Energy Systems, Architecture, IT",
      established: "1920",
    },
    {
      id: 3,
      name: "Tashkent State University of Economics",
      description:
        "Major public university focused on economics, finance, and business education.",
      programs: "Economics, Finance, Accounting, Management",
      established: "1931",
    },
    {
      id: 4,
      name: "Tashkent Medical Academy",
      description:
        "Top public medical institution preparing future doctors and healthcare professionals.",
      programs: "General Medicine, Dentistry, Pharmacy",
      established: "1935",
    },
    {
      id: 5,
      name: "Uzbekistan State World Languages University",
      description:
        "Specialized university focused on foreign languages and translation studies.",
      programs: "English, German, French, Translation",
      established: "1948",
    },
    {
      id: 6,
      name: "Tashkent University of Information Technologies",
      description:
        "Leading IT-focused public university developing specialists in digital technologies.",
      programs: "Software Engineering, Cybersecurity, Telecommunications",
      established: "1955",
    },
    {
      id: 7,
      name: "Tashkent State Law University",
      description:
        "Prestigious law-focused public university training future legal professionals.",
      programs: "Law, International Law, Criminal Justice",
      established: "1991",
    },
    {
      id: 8,
      name: "Tashkent Institute of Architecture and Construction",
      description:
        "Public university specializing in architecture, urban planning, and construction engineering.",
      programs: "Architecture, Civil Engineering, Urban Design",
      established: "1976",
    },
    {
      id: 9,
      name: "Uzbekistan State University of Physical Education and Sport",
      description:
        "Public institution focused on sports science and physical education.",
      programs: "Sports Coaching, Physical Education, Sports Management",
      established: "1955",
    },
    {
      id: 10,
      name: "Tashkent State Pedagogical University",
      description:
        "Major public university preparing future teachers and education specialists.",
      programs: "Primary Education, Psychology, Special Education",
      established: "1935",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DEEFE7] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002333] mb-4">
            Public Universities in Tashkent
          </h1>
          <p className="text-[#002333] text-lg max-w-2xl mx-auto">
            Discover state universities with strong academic traditions
            and nationally recognized degrees.
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

              <button className="mt-6 bg-[#159A9C] text-white py-3 rounded-full font-medium hover:bg-[#002333] transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
