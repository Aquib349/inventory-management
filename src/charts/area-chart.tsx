import { Area, AreaChart } from "recharts";

interface ChartProps {
  chartData: { month: string; desktop: number }[];
  color: string;
}

export function Areachart({ color, chartData }: ChartProps) {
  return (
    <div className="flex justify-center items-center bg-white">
      <AreaChart width={100} height={40} data={chartData}>
        <defs>
          <linearGradient id={`chartFill-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.5} />
            <stop offset="100%" stopColor={color} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          dataKey="desktop"
          type="monotone"
          stroke={color}
          strokeWidth={2}
          fill={`url(#chartFill-${color})`}
        />
      </AreaChart>
    </div>
  );
}
