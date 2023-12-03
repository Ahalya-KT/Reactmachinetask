import React from "react";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";
import Chart from "../components/Chart";
import Table from "../components/Table";
import Profile from "../components/Profile";

function Home() {
  return (
    <div className="w-full  bg-blue-100">
      {/* navbar */}
      <Navbar toggleNavbar={toggleNavbar} />
      {/* graph */}
      <div className="px-14 py-10 flex gap-3">
        <Graph />
        <Chart />
      </div>
      <div className="flex px-14 py-10">
        <Table />
        <Profile />
      </div>
    </div>
  );
}

export default Home;
