import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  layout: {
    // padding: 10,
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
        tickLength: 0,
      },
      ticks: {
        stepSize: 20,
        callback: (value: string | number) => {
          return value + " g";
        },
        // padding: 15,
      },
    },
    x: {
      grid: {
        display: false,
        tickLength: 4, //distance from label to line
      },
    },
  },
};

function DailyDashboarMacro({ data }: { data: Array<number> }) {
  const barData = {
    labels: ["carbo", "Prot", "Gord"],
    datasets: [
      {
        label: "My First Dataset",
        data: data,
        borderRadius: 4,
        backgroundColor: ["#2884FF", "#FF6370", "#F9C057"],
        barThickness: 30,
      },
    ],
  };
  return (
    <div className="w-auto mx-auto h-[80%] mt-2">
      <Bar
        data={barData}
        options={barOptions}
        className="-m-3"
      />

    </div>
  );
}

export default DailyDashboarMacro;
