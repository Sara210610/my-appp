function page() {
  return (
    <section className="py-24 bg-[#DEEFE7]">
      <div className="max-w-6xl mx-auto px-6">


        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#002333] mb-6">
            About TashEdu
          </h2>
          <p className="text-[#002333]/80 max-w-2xl mx-auto text-lg">
            We guide students toward global education opportunities and help them
            build a strong academic future.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-16 items-center">


          <div>
            <h3 className="text-3xl font-semibold text-[#002333] mb-6">
              Who We Are
            </h3>
            <p className="text-[#002333]/80 mb-6 leading-relaxed">
              TashEdu is an educational platform created to simplify the university
              admission process. We provide students with reliable guidance,
              step-by-step support, and access to international opportunities.
            </p>
            <p className="text-[#002333]/80 leading-relaxed">
              Our goal is to make quality education accessible and help students
              confidently take the next step in their academic journey.
            </p>
          </div>


          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#159A9C] hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-[#002333] mb-2">
                Our Mission
              </h4>
              <p className="text-[#002333]/80">
                To support students in choosing the right university and guide them
                through every stage of admission.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#159A9C] hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-[#002333] mb-2">
                Our Vision
              </h4>
              <p className="text-[#002333]/80">
                To become a trusted bridge between students and global educational
                institutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#159A9C] hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-[#002333] mb-2">
                Our Values
              </h4>
              <p className="text-[#002333]/80">
                Transparency, responsibility, and student success are at the core
                of everything we do.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default page
