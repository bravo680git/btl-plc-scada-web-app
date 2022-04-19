import SystemStatus from "../../components/systemStatus/SystemStatus";
import SystemAlarm from "../../components/systemAlarm/SystemAlarm";
import Header from "../../components/header/Header";

function MonitorPage() {
  return (
    <>
      <Header />
      <SystemStatus />
      <SystemAlarm />
    </>
  );
}

export default MonitorPage;
