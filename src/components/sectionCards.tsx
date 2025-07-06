import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SectionCardsProps = {
  title: string;
  description: string;
  badge?: string;
  value: string;
  trend: "up" | "down";
};

export function SectionCards({
  title,
  description,
  value,
  trend,
}: SectionCardsProps) {
  const isTrendingUp = trend === "up";

  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 rounded-2xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardDescription className="text-gray-400">{title}</CardDescription>
        </div>
        <CardTitle className="text-3xl font-bold text-white tabular-nums">
          {value}
        </CardTitle>
        <CardAction className="flex items-center gap-2">
          {isTrendingUp ? (
            <Badge className="bg-green-500 text-white">+{value}</Badge>
          ) : (
            <Badge className="bg-red-500 text-white">-{value}</Badge>
          )}
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm pt-0">
        <div className="flex items-center gap-2 font-medium text-white">
          {isTrendingUp ? "Trending up this month" : "Trending down this month"}
          {isTrendingUp ? (
            <IconTrendingUp className="size-4 text-green-400" />
          ) : (
            <IconTrendingDown className="size-4 text-red-400" />
          )}
        </div>
        <div className="text-gray-400">{description}</div>
      </CardFooter>
    </Card>
  );
}
