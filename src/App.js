import { Topbar, Sidebar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">others</div>
      </div>
    </div>
  );
}

export default App;
