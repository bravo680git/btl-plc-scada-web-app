import { useEffect, useState } from "react";

import Light from "../light/Light";
import "./systemStatus.css";

function SystemStatus({ socket }) {
  const [statusList, setStatusList] = useState();
  const [statusKeys, setStatusKeys] = useState();

  useEffect(() => {
    if (!socket) return;

    socket.on("status:send", (status) => {
      setStatusList(status);
      const list = [];
      for (let key in status) {
        list.push(key);
      }
      setStatusKeys(list);
    });

    return () => {
      socket.off("status:send");
    };
  }, [socket]);

  return (
    <>
      <div className="systemStatus__container">
        <p className="systemStatus__title">Trạng thái hệ thống</p>
        <div className="systemStatus__lights">
          {statusKeys &&
            statusKeys.map(
              (item, index) =>
                item !== "_id" && (
                  <div key={index} className="systemStatus__lights-item">
                    <Light on={statusList[item]} label={item} />
                  </div>
                )
            )}
        </div>
      </div>
    </>
  );
}

export default SystemStatus;
