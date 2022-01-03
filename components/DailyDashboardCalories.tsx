import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const dougOptions = {
  // for a semi circle
  rotation: -90,
  circumference: 180,
  cutout: 32,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

function DailyDashboardCalories({data}: {data: Array<number>}) {
  const dougData = {
    labels: ["Consumidas", "Faltantam"],
    datasets: [
      {
        borderRadius: 4,
        borderWidth: 0,
        data: data,
        backgroundColor: [
          "#5B68FF",
          "rgba(0, 0, 0, 0.25)",
        ],
      },
    ],
  };

  return <Doughnut data={dougData} options={dougOptions} width={170} height={80} />;

}

export default DailyDashboardCalories;
