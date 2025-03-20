import FilterCard from "@/components/FilterCard";
import TherapistCard from "@/components/TherapistCard";

export default function Therapists() {
  return (
    <div className="mt-20 w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar for Filters */}
        <div className="md:col-span-1">
          <div className="p-4 md:mt-4 w-full ">
            <FilterCard />
          </div>
        </div>

        {/* Therapist Cards Section */}
        <div className="md:col-span-3 md:pl-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 mt-4">
            Showing Results for <span className="text-[#01818C]">Online | Individual Therapy</span>
          </h2>
          <div className="flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <TherapistCard />
            <TherapistCard />
            <TherapistCard />
            <TherapistCard />
          </div>
        </div>
      </div>
    </div>
  );
}
