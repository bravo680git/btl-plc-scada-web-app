import Light from "./components/light/Light";
import SystemStatus from "./components/systemStatus/SystemStatus";
import SystemAlarm from "./components/systemAlarm/SystemAlarm";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <SystemStatus />
      <SystemAlarm />
    </div>
  );
}

export default App;
