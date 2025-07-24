"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../../../public/Images/logo.png"
import DrawerMenu from "../components/DrawerMenu";

export default function Navbar() {

  const pathname = usePathname();

   const navLinks = [
     { href: "/", label: "Home" },
     { href: "/service", label: "Service" },
     { href: "/portfolio", label: "Portfolio" },
     { href: "/blog", label: "Blog" },
     { href: "/client", label: "Client" },
     { href: "/contact", label: "Contact" },
   ];

  return (
    <header>
      <nav className="max-w-7xl px-4 md:px-6 lg:px-12 mx-auto py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Image
              src={logo}
              alt="My Photo"
              className="w-[100px] lg:w-[150px]"
            />
          </div>
          {/* links */}
          <div className="hidden md:block">
            <ul className="flex space-x-5 lg:space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[#A9B1C5] transition-colors duration-200 dm_sans md:text-xs font-medium lg:text-base ${
                      pathname === link.href
                        ? "active-gradient-text active-gradient-underline"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* button */}
          <div className="text-xs lg:text-base dm_sans font-medium rounded-lg text-white gradient-border cursor-pointer">
            <div className="gradient-border-inner px-3 py-2">
              <button>Get started</button>
            </div>
          </div>
          {/* menu */}
          <div className="text-lg text-white md:hidden">
            <DrawerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
