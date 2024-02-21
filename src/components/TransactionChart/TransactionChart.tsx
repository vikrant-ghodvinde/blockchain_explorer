import { FC, useEffect } from "react";
import { Chart } from "chart.js";

export const TransactionChart: FC = () => {
  useEffect(() => {
    let canvas = document.getElementById("myChart") as HTMLCanvasElement | null;
    let ctx = canvas?.getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: "Applied",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
        ],
      },
    });
  }, []);
  return (
    <div className="relative w-full">
      <canvas id="myChart" className="w-full h-12"></canvas>
    </div>
  );
};
