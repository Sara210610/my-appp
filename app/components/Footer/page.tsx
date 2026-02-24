import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001a26] text-[#B4BEC9] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">


          <div>
            <h2 className="text-2xl font-bold text-[#159A9C] mb-4">
              TashEdu
            </h2>
            <p className="text-sm leading-relaxed">
              We connect people and create opportunities to grow together.
            </p>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/components/About" },
                { name: "Contact", href: "/components/Contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#159A9C] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>
            <p className="text-sm mb-2">
              Email: support@helps.com
            </p>
            <p className="text-sm">
              Phone: +123 456 789
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-[#159A9C]/30 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} HelpS. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
