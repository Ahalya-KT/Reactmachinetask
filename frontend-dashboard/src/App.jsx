import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full lg:ml-44">
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
