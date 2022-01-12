import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dougOptions = {
  // for a semi circle
  // rotation: -90,
  // circumference: 180,
  cutout: 0,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

function MacroDoug({ data }: { data: Array<number> }) {
  const dougData = {
    labels: ["Proteína", "Carboidrato", "Gordura"],
    datasets: [
      {
        label: "# of Votes",
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="h-28 w-28 absolute right-5 invisible md:visible top-[50%] -translate-y-[50%]">
      <Doughnut data={dougData} options={dougOptions} />
    </div>
  );
}

export default MacroDoug;
