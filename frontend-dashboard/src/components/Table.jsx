import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [tableData, settableData] = useState([]);
  useEffect(() => {
    async function tableDetails() {
      await axios.get("http://localhost:3001/api/table").then((res) => {
        // console.log(res.data);
        settableData(res.data);
      });
    }
    tableDetails();
  }, []);

  return (
    <div className="w-5/6 ">
      <table className=" w-full bg-white border  rounded-lg shadow-lg border-gray-300">
        <thead>
          <tr className="table-row">
            <th className="table-head">Id</th>
            <th className="table-head">Name</th>
            <th className="table-head">Quality</th>
            <th className="table-head">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((items, index) => (
            <tr
              key={index}
              className="table-row odd:bg-white even:bg-slate-50 "
            >
              <td className="table-cell">{items.id}</td>
              <td className="table-cell">{items.name}</td>
              <td className="table-cell">{items.quantity}</td>
              <td className="table-cell">{items.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
