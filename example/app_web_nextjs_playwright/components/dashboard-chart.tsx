"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

const mockLabels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
const mockSeries = [42, 55, 38, 72, 61, 84];

export function DashboardChart() {
  const options = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "#e6edf3" },
        },
      },
      scales: {
        x: {
          ticks: { color: "#8b949e" },
          grid: { color: "rgba(48, 54, 61, 0.6)" },
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#8b949e" },
          grid: { color: "rgba(48, 54, 61, 0.6)" },
        },
      },
    }),
    [],
  );

  const data = useMemo(
    () => ({
      labels: mockLabels,
      datasets: [
        {
          label: "Eventos (mock)",
          data: mockSeries,
          borderColor: "#58a6ff",
          backgroundColor: "rgba(88, 166, 255, 0.15)",
          fill: true,
          tension: 0.35,
        },
      ],
    }),
    [],
  );

  return (
    <div className="relative h-[280px] w-full">
      <Line data={data} options={options} />
    </div>
  );
}
