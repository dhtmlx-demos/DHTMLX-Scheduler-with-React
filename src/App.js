import "./styles.css";
import Gantt from "./Gantt";
import { getData } from "./data.js";

function App() {
  return <Gantt tasks={getData()} />;
}

export default App;
