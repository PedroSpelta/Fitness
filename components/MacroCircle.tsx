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
        backgroundColor: ["rgba(54, 162, 235, 0.8)", "rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgba(0,0,0,0.1)"],
        borderWidth: 0.5
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
    <div className="w-20 h-20 relative">
      <Doughnut data={dougData} options={dougOptions} />
      <p className="absolute bottom-3.5 left-1/2 -translate-x-1/2 text-sm text-gray-600 -z-10">
        {" "}
        {missing + completed}
      </p>
    </div>
  );
}

export default MacroCircle;
