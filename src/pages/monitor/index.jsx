import SystemStatus from "../../components/systemStatus/SystemStatus";
import SystemAlarm from "../../components/systemAlarm/SystemAlarm";

function MonitorPage() {
  return (
    <>
      <SystemStatus />
      <SystemAlarm />
    </>
  );
}

export default MonitorPage;
