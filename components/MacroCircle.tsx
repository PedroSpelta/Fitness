import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function MacroCircle({
  completed,
  missing,
}: {
  completed: number;
  missing: number;
}) {
  const dougData = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [completed, missing],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dougOptions = {
    // for a semi circle
    rotation: -90,
    circumference: 180,
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
    <div className="w-20 h-20">
      <Doughnut data={dougData} options={dougOptions} />
    </div>
  );
}

export default MacroCircle;
