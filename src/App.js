import "./styles.css";
import Scheduler from "./Scheduler";
import { getData } from "./data.js";

function App() {
  return <Scheduler events={getData()} />;
}

export default App;
