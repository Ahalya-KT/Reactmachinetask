import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex">
        <div className={`${!showNavbar && "hidden"} lg:block`}>
          <Sidebar />
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
