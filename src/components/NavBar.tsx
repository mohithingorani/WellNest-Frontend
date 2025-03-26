"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const session = useSession();

  const Links: Record<string, string> = {
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
  };











  
  const router = useRouter();
  const pathname = usePathname();
  
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
            className = {`h-8 ${pathname===Links[link]?"text-[#3AAFA9]":" text-slate-600"} hover:text-[#3AAFA9] `}
          >
            <button className={`hover:border-b-2 ${pathname===Links[link]&&"border-b-2"}  h-full`}>{link}</button>
          </a>
        ))}
        <div className={`h-8 cursor-pointer text-slate-600 hover:text-[#3AAFA9]`}>
        <button onClick={()=>{
          if(session.status==="authenticated"){
            signOut();
          }else{
            router.push("/login");
          }
        }} className={`hover:border-b-2 h-full`}>
          {session.status==="unauthenticated" || session.status==="loading"?"LOGIN":"LOGOUT"}
        </button>
          
        </div>
      </div>
    </nav>
  );
}
