import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

interface IMacrosObject {
  carb: number;
  prot: number;
  fat: number;
}

function MacroCircle({ macros }: { macros: IMacrosObject }) {
  const dougData = {
    labels: ["Proteína", "Carboidrato", "Gordura"],
    datasets: [
      {
        label: "# of Votes",
        data: [macros.prot, macros.carb, macros.fat],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
        borderColor: [
          "rgba(0, 0, 0, 0.3)",
          "rgba(0, 0, 0, 0.3)",
          "rgba(0, 0, 0, 0.3)",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const dougOptions = {
    // for a semi circle
    // rotation: -90,
    // circumference: 180,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-32 h-32">
        <Pie data={dougData} options={dougOptions} />
      </div>
    </div>
  );
}

export default MacroCircle;
