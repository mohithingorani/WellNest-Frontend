import BookCard from "@/components/BookCard";
import ChatCard from "@/components/ChatCard";
import OfferingCard from "@/components/OfferingCard";
import TakeQuizCard from "@/components/TakeAQuix";

interface OfferingTypesType {
  Name: string;
  Image: string;
  Z: number;
}

export default function Home() {
  const offeringTypes: OfferingTypesType[] = [
    { Name: "Geriatric Care", Image: "old.svg", Z: 20 },
    { Name: "Family Therapy", Image: "family.svg", Z: 30 },
    { Name: "Couples Therapy", Image: "couple.svg", Z: 40 },
    { Name: "Individual Therapy", Image: "personal.svg", Z: 50 },
    { Name: "Child Therapy", Image: "child.svg", Z: 40 },
    { Name: "Psychiatry", Image: "psychiatry.svg", Z: 30 },
    { Name: "Career Counselling", Image: "career.svg", Z: 20 },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 ">
      <div className="mt-12 flex flex-col gap-4 items-center text-center pt-6">
        <div className="text-[#1a7772] text-3xl sm:text-4xl md:text-5xl mt-6 font-medium">
        &quot;Healing begins with a <span className="underline">conversation</span>&quot;
        </div>
        <div className="text-base sm:text-lg max-w-2xl">
          Experience tailored care from our award-winning therapists for all your mental health concerns & wellness needs.
        </div>
        <div className="pt-6 text-[#01818C] text-2xl sm:text-3xl font-medium">
          What brings you here today?
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8">
        <BookCard />
        <TakeQuizCard />
        <ChatCard />
      </div>

      <div className="w-full mt-12">
        <div className="font-medium flex justify-center text-2xl sm:text-3xl text-[#01818C] mb-6">
          Our Wellbeing Offerings
        </div>
        <div className="flex flex-wrap justify-center group gap-4 md:gap-0 mb-20">
          {offeringTypes.map((card, key) => (
            <OfferingCard
              key={key}
              image={card.Image}
              label={card.Name}
              className="transition-transform duration-200 ease-out mx-[-10px] hover:scale-105 group-hover:opacity-60 group-hover:scale-90 hover:opacity-100 "
              z_axis={card.Z}
            />
          ))}
        </div>
      </div>
    </div>
  );
}