import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import axios from "axios";

function Chart() {
  const [pieData, setpieData] = useState([]);
  const [labels, setlabels] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios.get("http://localhost:3001/api/pie-chart");
      // console.log(data);

      if (data) {
        const pieDataArray = data.map((item) => item.label);
        const labelsArray = data.map((item) => item.value);
        setpieData(pieDataArray);
        setlabels(labelsArray);
        console.log(pieData);
      }
    };
    loadData();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: pieData,
        backgroundColor: [
          "rgb(0, 255, 128)",
          "rgb(217, 255, 204)",
          "rgb(198, 255, 179)",
          "rgb(102, 255, 140)",
          "rgb(51, 255, 204)",
          "rgb(217, 255, 204)",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white w-80 shadow-lg rounded-lg p-8">
      <div className=" h-56  flex justify-center items-center ">
        <div className="w-full">
          {pieData && (
            <Pie data={data} options={{ plugins: { legend: false } }} />
          )}
        </div>
      </div>
      <div className="font-semibold">
        <p> Category A</p>
        <p>Category B</p>
        <p>Category C</p>
        <p>Category D</p>
        <p>Category E</p>
      </div>
    </div>
  );
}

export default Chart;
