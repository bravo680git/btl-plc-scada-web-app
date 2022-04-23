import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import fetchData from "../../api/fetchData";
import "./systemAlarm.css";

function SystemAlarm() {
  const [alarms, setAlarms] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData.getAlarms();
        setAlarms(res);
      } catch (error) {
        toast.error(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="systemAlarm__container">
        <p className="systemAlarm__title">Cảnh báo</p>
        <div className="systemAlarm__table">
          <table>
            <thead>
              <tr>
                <td>Stt</td>
                <td>Thời gian</td>
                <td>Mã lỗi</td>
                <td>Thông báo</td>
              </tr>
            </thead>

            <tbody>
              {alarms &&
                alarms.map((item, index) => (
                  <tr key={index}>
                    <td>{item.no}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SystemAlarm;
