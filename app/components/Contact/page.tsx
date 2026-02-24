function page() {
  return (
    <section className="py-24 bg-[#DEEFE7] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Заголовок */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#002333] mb-6">
            Contact Us
          </h2>
          <p className="text-[#002333]/80 max-w-2xl mx-auto text-lg">
            Have questions or need guidance? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Контактная форма */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto
                w-full sm:p-8 sm:max-w-xl">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[#002333] font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="p-4 rounded-xl border border-[#159A9C] 
                   focus:outline-none focus:ring-2 focus:ring-[#B4BEC9] 
                   w-full"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#002333] font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-4 rounded-xl border border-[#159A9C] 
                   focus:outline-none focus:ring-2 focus:ring-[#B4BEC9] 
                   w-full"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-[#002333] font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Write your message here..."
                className="p-4 rounded-xl border border-[#159A9C] 
                   focus:outline-none focus:ring-2 focus:ring-[#B4BEC9] 
                   resize-none w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-[#159A9C] text-white font-semibold py-4 rounded-xl 
                 hover:bg-[#B4BEC9] hover:text-[#002333] transition-all duration-300
                 w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>


        {/* Контактная информация */}
        <div className="text-center mt-16 text-[#002333]/80 space-y-2">
          <p>Email: tash_edu@gmail.com</p>
          <p>Phone: +998 99 373 89 83</p>
          <p>Address: Tashkent, Uzbekistan</p>
        </div>

      </div>
    </section>
  );
}

export default page;
