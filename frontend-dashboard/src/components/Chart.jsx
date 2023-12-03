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
        const pieDataArray = data.map((item) => item.value);
        const labelsArray = data.map((item) => item.label);
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
    <div className="bg-white lg:w-2/6 w-full lg:mt-0 mt-2 shadow-lg rounded-lg p-9">
      <div className=" h-56  ">
        <div className="w-full h-52 flex justify-center items-center">
          {pieData && (
            <Pie data={data} options={{ plugins: { legend: false } }} />
          )}
        </div>
      </div>
      <div className="font-semibold flex gap-2">
        <div className="w-5 h-5 bg-emerald-300 rounded-full py-2 "></div>
        <div>Category A</div>
      </div>

      <div className="font-semibold flex gap-2">
        <div className="w-5 h-5 bg-green-500 rounded-full py-2 "></div>
        <div>Category B</div>
      </div>

      <div className="font-semibold flex gap-2">
        <div className="w-5 h-5 bg-green-400 rounded-full py-2 "></div>
        <div>Category C</div>
      </div>

      <div className="font-semibold flex gap-2">
        <div className="w-5 h-5 bg-emerald-600 rounded-full py-2 "></div>
        <div>Category D</div>
      </div>

      <div className="font-semibold flex gap-2">
        <div className="w-5 h-5 bg-green-300 rounded-full py-2 "></div>
        <div>Category E</div>
      </div>
    </div>
  );
}

export default Chart;
