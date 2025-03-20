import Image from "next/image";

export default function NavBar() {
  const Links: Record<string, string> = {
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    LOGIN: "",
  };
  return (
    <nav>
      <div className="flex w-full z-70 justify-end px-8 py-8 gap-4 text-sm bg-white shadow-xl h-20 fixed top-0 items-center md:px-60">
        <div className="flex flex-start w-full"><Image src={"/wellnest.svg"} width={"150"} height={"150"} alt="logo"/></div>
        {Object.keys(Links).map((link, index) => (
          <a
            key={index}
            href={Links[link]}
            className="h-8 hover:text-[#3AAFA9] text-slate-600"
          >
            <div className="hover:border-b-2 h-full border-">{link}</div>
          </a>
        ))}
      </div>
    </nav>
  );
}
