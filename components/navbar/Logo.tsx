"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex gap-x-2 justify-center items-center cursor-pointer"
    >
      <Image
        priority={true}
        src="/images/logo.png"
        height="40"
        width="40"
        alt="Logo"
      />
      <div className="text-[#FF5B58] hidden md:block font-extrabold text-xl mt-1">
        BNB Hotel
      </div>
    </div>
  );
};

export default Logo;
