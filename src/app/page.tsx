import Image from "next/image";
import { ChartLineInteractive } from "@/components/charts/lineChart";
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import { SectionCards } from "@/components/charts/sectionCards";
import { ChartConfig } from "@/components/ui/chart";
import { ChartRadialStacked } from "@/components/charts/radialChart";
import { ChartBarHorizontal } from "@/components/charts/blockChart";

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

  const chartData = [
    { date: "2024-01-01", desktop: 120 },
    { date: "2024-02-01", desktop: 135 },
    { date: "2024-03-01", desktop: 150 },
    { date: "2024-04-01", desktop: 222 },
    { date: "2024-05-01", desktop: 165 },
    { date: "2024-06-01", desktop: 178 },
    { date: "2024-07-01", desktop: 190 },
    { date: "2024-08-01", desktop: 200 },
    { date: "2024-09-01", desktop: 210 },
    { date: "2024-10-01", desktop: 220 },
    { date: "2024-11-01", desktop: 230 },
    { date: "2024-12-01", desktop: 240 },
  ];
  
  const chartConfig = {
    views: {
      label: "Tickets Recebidos",
    },
    desktop: {
      label: "Desktop",
      color: "#F1F5F9",
    },
  } satisfies ChartConfig

   return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {cardsData.map((card, index) => (
          <SectionCards key={index} {...card} />
        ))}
      </div>

      <div className="mt-6">
        <ChartLineInteractive chartData={chartData} chartConfig={chartConfig}/>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-300 mt-5">
          <div>
            <ChartRadialStacked />
          </div>
          <div>
            <ChartBarHorizontal />
          </div>
      </div>
    </div>
  );
}
