import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {},
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      // generate a random number between -1000 and 1000
      data: labels.map(() => Math.random() * 1000 - 500),
      borderColor: "rgba(38,70,117, 0.3)",
      backgroundColor: "rgba(38,70,117, 0.3)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random() * 1000 - 500),
      borderColor: "rgb(38,70,117)",
      backgroundColor: "rgb(38,70,117)",
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
