"use client";
import Image from "next/image";
import { useState } from "react";

export default function OfferingCard({
  z_axis,
  className,
  label,
  image,
}: {
  z_axis: number;
  className?: string;
  label: string;
  image: string;
}) {
    const [z_axisFinal, setZaxisFinal] = useState(z_axis);
  
  return (
    <div
      onMouseOver={() => {
        setZaxisFinal(60);
        console.log("onmouseover");
      }}
      onMouseLeave={() => {
        setZaxisFinal(z_axis)
      }}
      style={{
        zIndex: z_axisFinal,
      }}
      className={`w-[200px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105 relative  h-[250px] rounded-2xl shadow-xl shadow-[#299b95] bg-white border-0.5 border-black ${className}`}
    >
      <div className="flex font-bold flex-col justify-end items-center h-full pb-4 text-[#09615d]">
        <div>
          <Image
            src={`/services/${image}`}
            width={"120"}
            height={"120"}
            alt="image"
          />
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
}
