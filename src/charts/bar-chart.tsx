import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", sales: 186 },
  { month: "February", sales: 305 },
  { month: "March", sales: 237 },
  { month: "April", sales: 73 },
  { month: "May", sales: 209 },
  { month: "June", sales: 214 },
  { month: "July", sales: 260 },
  { month: "August", sales: 300 },
  { month: "September", sales: 280 },
  { month: "October", sales: 320 },
  { month: "November", sales: 250 },
  { month: "December", sales: 290 },
];

const chartConfig = {
  sales: {
    label: "Total Sale",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Barchart() {
  return (
    <>
      <h2 className="text-base font-bold text-gray-900 mb-2">Total Sale</h2>
      <ChartContainer config={chartConfig} className="w-full h-76 pt-8">
        <BarChart data={chartData} barCategoryGap={40} width={500}>
          <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={8}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis dataKey="" tickFormatter={(value) => `$${value}k`} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="sales" radius={8} barSize={40} fill={"#0e3473"} />
        </BarChart>
      </ChartContainer>
    </>
  );
}
