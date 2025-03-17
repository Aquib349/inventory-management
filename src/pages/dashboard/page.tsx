import { Areachart } from "@/charts/area-chart";
import { Barchart } from "@/charts/bar-chart";
import { Piechart } from "@/charts/radial-chart";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

type CardData = {
  id: number;
  title: string;
  value: string;
  desc: string;
  color: string;
  chartData: any;
};

const Page = () => {
  const generateChartData = () => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map((month) => ({
      month,
      desktop: Math.floor(Math.random() * 400) + 50,
    }));
  };

  const data: CardData[] = [
    {
      id: 1,
      title: "Total Revenue",
      value: "$8,375",
      desc: "Revenue increased by 13% this month",
      color: "#58d68d",
      chartData: generateChartData(),
    },
    {
      id: 2,
      title: "Total Shipment",
      value: "7,389",
      desc: "Shipments increased compared to last month",
      color: "#ec7063",
      chartData: generateChartData(),
    },
    {
      id: 3,
      title: "Total Orders",
      value: "1,865",
      desc: "26% more orders than last month",
      color: "#3498db",
      chartData: generateChartData(),
    },
    {
      id: 4,
      title: "Delivery Time",
      value: "4.5 Days",
      desc: "Delivery Time improved by 13% this month",
      color: "#eb984e",
      chartData: generateChartData(),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {data.map((item) => (
          <Cards key={item.id} className="shadow-md">
            <div className="flex justify-between items-center">
              <div className="">
                <div className="text-sm font-normal">{item.title}</div>
                <div className="text-xl font-bold text-primary">
                  {item.value}
                </div>
              </div>
              <Areachart color={item.color} chartData={item.chartData} />
            </div>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </Cards>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <Cards>
            <Barchart />
          </Cards>
        </div>

        <Cards>
          <Piechart />
        </Cards>
      </div>
    </div>
  );
};

export default Page;

// custom card component
interface CardProps {
  children: ReactNode;
  className?: string;
}
function Cards({ children, className }: CardProps) {
  return (
    <Card className={`w-full p-4 rounded-md ${className}`}>
      <CardContent className="p-0 space-y-2">{children}</CardContent>
    </Card>
  );
}
