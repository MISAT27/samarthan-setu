import { HeartIcon } from "@heroicons/react/24/solid";
export default function Footer() {
  return (
    <footer className="bg-[#071E07] text-white py-8 px-4 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Samarthan Setu</h3>
          <p className="text-sm">
            Empowering communities through health, education, and support. Join
            us in building a better tomorrow.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="index.html" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="contact.html" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#donate" className="hover:underline">
                Donate
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm">Email: samarthansetu@gmail.com</p>
          <p className="text-sm">Phone: +91 12345 67890</p>
          <p className="text-sm">Location: India</p>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-white/20 pt-4">
        &copy; 2025 Samarthan Setu. All rights reserved.

      </div>
      {/* <div className="text-center text-sm font- capitalize">Made with hope, trust and little hidden love ❤️</div> */}
    </footer>
  );
}
