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

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];
  const data = {
    graghlabel,
    datasets: [
      {
        label: "Dataset 1",
        data: graphData,
        backgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };
  return (
    <div className="bg-white w-4/6 shadow-lg ">
      <div className="">{graphData && <Line data={data} />}</div>
    </div>
  );
}

export default Graph;
