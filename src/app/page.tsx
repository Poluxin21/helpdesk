import Image from "next/image";
import { ChartLineLinear } from "@/components/lineChart";
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import { SectionCards } from "@/components/sectionCards";

export default function Home() {
 
 // TODO: Refatorar para usar hook, criar arquivo separado para interfaces e tipos

  type Trend = "down" | "up";
  interface CardData {
    title: string;
    description: string;
    value: string;
    trend: Trend;
  }

  const cardsData: CardData[] = [
    {
      title: "Tickets Recebidos",
      description: "Total de tickets recebidos no mês",
      value: "150",
      trend: 'down'
    },
    {
      title: "Tickets Respondidos",
      description: "Total de tickets respondidos no mês",
      value: "120",
      trend: 'up'
    },
    {
      title: "Tickets Pendentes",
      description: "Total de tickets pendentes no mês",
      value: "30",
      trend: 'down'
    }
  ];


   return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {cardsData.map((card, index) => (
          <SectionCards key={index} {...card} />
        ))}
      </div>

      <div className="w-120 mt-6">
        <ChartLineLinear />
      </div>
    </div>
  );
}
