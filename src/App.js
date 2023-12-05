import "./App.css";
import Patient from "./components/Patient";
import Sidebar from "./components/Sidebar";
import NavItems from "./NavItems";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="container">
        <NavItems />
        <Patient />
      </div>
    </div>
  );
}

export default App;
