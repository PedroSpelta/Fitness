import React, { useEffect } from "react";
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
import { usePersonalDataContext } from "../context/personalData";
import { useFoodContext } from "../context/foodContext";

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

function WeeklyDash({ data }: { data: Array<number> }) {
  const { userDates } = usePersonalDataContext();
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
  useEffect(() => {
    console.log(userDates);
  }, [userDates]);
  return (
    <div className="bg-white w-full h-52 max-w-3xl mt-3 rounded-md shadow-lg ">
      <Bar
        data={barData}
        options={barOptions}
        className="m-3"
        height={10}
        width={10}
      />
    </div>
  );
}

export default WeeklyDash;
