import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

function Graph() {
  const [graphData, setgraghData] = useState([]);
  const [graghlabel, setgraghlabel] = useState([]);

  useEffect(() => {
    const loadValue = async () => {
      const { data } = await axios.get("http://localhost:3001/api/graph");

      if (data) {
        const graphDataArray = data.map((item) => item.y);
        const graghlabelArray = data.map((item) => item.x);
        setgraghData(graphDataArray);
        setgraghlabel(graghlabelArray);
        console.log(graphData);
      }
    };
    loadValue();
  }, []);

  let data = {
    labels: graghlabel,
    datasets: [
      {
        label: "Dataset 1",
        data: graphData,
        backgroundColor: "rgb(179, 255, 255)",
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "#66ccff",
      },
    ],
  };
  return (
    <div className="bg-white rounded-lg lg:w-4/6 w-full p-3 shadow-lg ">
      {graphData && (
        <Line data={data} options={{ plugins: { legend: false } }} />
      )}
    </div>
  );
}

export default Graph;
