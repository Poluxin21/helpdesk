import Image from "next/image";
import { ChartLineLinear } from "@/components/lineChart";
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import { SectionCards } from "@/components/sectionCards";

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white mb-8">
          <div className="contents">
            <SectionCards />
          </div>
        </div>

        <div className="w-full">
          <ChartLineLinear />
        </div>
      </div>
    </div>
  );
}
