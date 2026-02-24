"use client";

export default function CoworkingPage() {

  const coworkingZones = [
    {
      id: 1,
      name: "GroundZero",
      description:
        "One of the most popular coworking networks in Tashkent with a strong startup and tech community.",
      features: "High-speed WiFi, Meeting Rooms, Event Space, 24/7 Access",
      district: "Shaykhantakhur District",
      address: "45A Afrosiyob Street, Tashkent",
    },
    {
      id: 2,
      name: "C-Space",
      description:
        "Premium coworking space offering comfortable work zones and professional meeting rooms.",
      features: "Private Offices, Conference Rooms, Coffee Area",
      district: "Yunusabad District",
      address: "12 Amir Temur Avenue, Tashkent",
    },
    {
      id: 3,
      name: "Workly",
      description:
        "Modern coworking designed for freelancers and creative teams.",
      features: "Open Space, Meeting Rooms, Fast Internet",
      district: "Mirzo-Ulugbek District",
      address: "18 Buyuk Ipak Yuli Street, Tashkent",
    },
    {
      id: 4,
      name: "Regus Tashkent",
      description:
        "International coworking brand offering professional office environments.",
      features: "Private Offices, Virtual Office, Meeting Rooms",
      district: "Tashkent City",
      address: "Tashkent City Business Center, Tashkent",
    },
    {
      id: 5,
      name: "IT Park Coworking",
      description:
        "Tech-focused coworking space ideal for startups and developers.",
      features: "Startup Events, Networking, High-Speed Internet",
      district: "Yashnabad District",
      address: "17A Muxtor Ashrafiy Street, Tashkent",
    },
    {
      id: 6,
      name: "HubLab",
      description:
        "Creative coworking environment perfect for designers.",
      features: "Creative Zones, Collaboration Spaces, WiFi",
      district: "Central Tashkent",
      address: "7 Shota Rustaveli Street, Tashkent",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DEEFE7] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002333] mb-4">
            Coworking Zones in Tashkent
          </h1>
          <p className="text-[#002333] text-lg max-w-2xl mx-auto">
            Find the perfect workspace to boost your productivity.
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coworkingZones.map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#002333] mb-3">
                  {space.name}
                </h2>

                <p className="text-[#002333] mb-4">
                  {space.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-[#159A9C] font-semibold">
                    District:
                  </p>
                  <p className="text-[#002333]">{space.district}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-[#159A9C] font-semibold">
                    Address:
                  </p>

                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(space.address)}`,
                        "_blank"
                      )
                    }
                    className="text-blue-600 hover:underline text-left"
                  >
                    {space.address}
                  </button>
                </div>

                <div>
                  <p className="text-sm text-[#159A9C] font-semibold">
                    Features:
                  </p>
                  <p className="text-[#002333]">{space.features}</p>
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
