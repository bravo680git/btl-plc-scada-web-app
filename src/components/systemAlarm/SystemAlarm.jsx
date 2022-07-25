import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import fetchData from "../../api/fetchData";
import "./systemAlarm.css";

function SystemAlarm({ socket }) {
  const [alarms, setAlarms] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData.getAlarms();
        const reverseRes = res.reverse();
        setAlarms(reverseRes);
      } catch (error) {
        toast.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("alarm:send", (res) => {
      setAlarms((alarms) => [...res, ...alarms]);
    });

    return () => {
      socket.off("alarms:send");
    };
  }, [socket]);

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
                    <td>{index + 1}</td>
                    <td>{item.dateTime}</td>
                    <td>{item.errorCode}</td>
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
