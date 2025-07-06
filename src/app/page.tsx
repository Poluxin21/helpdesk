import Image from "next/image";
import { ChartLineLinear } from "@/components/lineChart";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <ChartLineLinear />
    </div>
  );
}
