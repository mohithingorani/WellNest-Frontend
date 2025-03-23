"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const Links: Record<string, string> = {
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    LOGIN: "/login",
  };
  const router = useRouter();
  let pathname = usePathname();
  if(pathname==="/"){
    pathname = "home"
  }
  else if(pathname==='/about'){
    pathname="about"
  }
  else if(pathname==="/contact"){
    pathname="contact"
  }
  
  return (
    <nav>
      <div className="flex w-full z-120 justify-end px-8 py-8 gap-4 text-sm bg-white shadow-xl h-20 fixed top-0 items-center md:px-60">
        <div className="flex  flex-start w-full">
          <button
          className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src={"/wellnest.svg"}
              width={"150"}
              height={"150"}
              alt="logo"
            />
          </button>
        </div>
        {Object.keys(Links).map((link, index) => (
          <a
            key={index}
            href={Links[link]}
            className = {`h-8 ${pathname===link.toLowerCase()?"text-[#3AAFA9]":" text-slate-600"} hover:text-[#3AAFA9]`}
          >
            <div className={`hover:border-b-2 ${pathname===link.toLowerCase()&&"border-b-2"}  h-full`}>{link}</div>
          </a>
        ))}
      </div>
    </nav>
  );
}
