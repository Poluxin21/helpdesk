"use client"

import React from "react"
import { TrendingUp, BarChart3 } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A modern linear line chart with blue dashboard theme"

const chartData = [
  { month: "January", tickets: 186 },
  { month: "February", tickets: 305 },
  { month: "March", tickets: 237 },
  { month: "April", tickets: 73 },
  { month: "May", tickets: 209 },
  { month: "June", tickets: 214 },
  { month: "July", tickets: 300 },
  { month: "August", tickets: 250 },
  { month: "September", tickets: 400 },
  { month: "October", tickets: 350 },
  { month: "November", tickets: 450 },
  { month: "December", tickets: 500 },
]

const chartConfig = {
  desktop: {
    label: "tickets",
    color: "hsl(217, 91%, 60%)",
  },
} satisfies ChartConfig

export function ChartLineLinear() {
  return (
    <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 backdrop-blur-sm shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-300 text-slate-100 hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-white">Tickets por Mês</CardTitle>
            <CardDescription className="text-slate-400 text-sm">
              Crescimento consistente ao longo do ano
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Analytics</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent rounded-xl pointer-events-none"></div>
        
        <ChartContainer config={chartConfig} className="relative">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid 
              vertical={false} 
              strokeDasharray="3 3"
              stroke="hsl(215, 25%, 27%)"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 12 }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                hideLabel 
                className="bg-slate-800 border-slate-700 text-slate-100"
              />}
            />
            <Line
              dataKey="tickets"
              type="linear"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth={3}
              dot={{
                fill: "hsl(217, 91%, 60%)",
                strokeWidth: 2,
                stroke: "hsl(217, 91%, 70%)",
                r: 4,
              }}
              activeDot={{
                r: 6,
                fill: "hsl(217, 91%, 60%)",
                stroke: "hsl(217, 91%, 70%)",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}