import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";
import Chart from "../components/Chart";
import Table from "../components/Table";
import Profile from "../components/Profile";

function Home() {
  const [showNavbar, setshowNavbar] = useState(false);
  const toggleNavbar = () => {
    setshowNavbar(!showNavbar);
  };
  return (
    <div className="w-full  bg-blue-100">
      {/* navbar */}
      <Navbar toggleNavbar={toggleNavbar} />
      {/* graph */}
      <div className="  px-5 lg:px-14 py-5 lg:flex gap-6">
        <Graph />
        <Chart />
      </div>
      <div className="lg:flex px-5 py-4 gap-4">
        <Table />
        <Profile />
      </div>
    </div>
  );
}

export default Home;
