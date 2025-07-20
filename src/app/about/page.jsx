"use client";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="text-3xl font-bold">About Page</p>
      <br />
      <button
        onClick={handleNavigation}
        className="cursor-pointer px-3 py-1 rounded transition-colors outline hover:bg-amber-500 hover:text-white"
      >
        Address
      </button>
    </div>
  );
};

export default AboutPage;
