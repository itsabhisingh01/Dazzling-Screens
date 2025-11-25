import { Facebook, Instagram, Twitter, Film } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#1A1A1A] border-t border-gray-800 py-12 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image className=" bg-yellow-300 rounded-xl" src="/icon.png" alt="logo" width={40} height={40} />
              <h3 className="font-cinzel text-2xl font-bold">Dazzling Screens</h3>
            </div>
            <p className="text-gray-400">
              Creating unforgettable cinematic experiences for your special
              moments. Where celebrations meet luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-xl font-bold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "Theatres", "Gallery", "About Us", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-400 hover:text-yellow-300 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-cinzel text-xl font-bold mb-4">Follow Us</h4>

            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center 
                text-gray-400 hover:text-yellow-300 hover:bg-yellow-300/10 transition-all"
              >
               <Facebook size={20} />

              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center 
                text-gray-400 hover:text-yellow-300 hover:bg-yellow-300/10 transition-all"
              >
                <Twitter size={20} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center 
                text-gray-400 hover:text-yellow-300 hover:bg-yellow-300/10 transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dazzling Screens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
