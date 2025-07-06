"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartData = [
  { categoria: "satisfacao", satisfeito: 70, neutro: 20, insatisfeito: 10 },
]

const chartConfig = {
  satisfeito: {
    label: "Satisfeito",
    color: "#22c55e",
  },
  neutro: {
    label: "Neutro",
    color: "#facc15",
  },
  insatisfeito: {
    label: "Insatisfeito",
    color: "#ef4444",
  },
} satisfies ChartConfig

export function ChartRadialStacked() {
  const total = chartData[0].satisfeito + chartData[0].neutro + chartData[0].insatisfeito

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gráfico de Satisfação</CardTitle>
        <CardDescription>Pesquisa de Usuários</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="text-2xl font-bold"
                            fill="white"
                        >
                            {`${chartData[0].satisfeito}%`}
                        </tspan>
                        <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground"
                        >
                            Satisfeitos
                        </tspan>
                        </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="satisfeito"
              stackId="a"
              cornerRadius={5}
              fill="#22c55e"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="neutro"
              stackId="a"
              cornerRadius={5}
              fill="#facc15"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="insatisfeito"
              stackId="a"
              cornerRadius={5}
              fill="#ef4444"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium text-white">
          {chartData[0].satisfeito}% dos usuários estão satisfeitos
        </div>
        <div className="text-muted-foreground leading-none">
          Baseado na última pesquisa de satisfação
        </div>
      </CardFooter>
    </Card>
  )
}