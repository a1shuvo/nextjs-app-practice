"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  if (!pathname.includes("dashboard")) {
    return (
      <nav className="h-16 bg-amber-100 flex justify-center items-center">
        <ul className="flex gap-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`px-3 py-1 rounded transition-colors
                ${
                  pathname === link.path
                    ? "bg-amber-500 text-white"
                    : "hover:bg-amber-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
