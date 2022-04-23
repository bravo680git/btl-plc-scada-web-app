import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import fetchData from "../../api/fetchData";
import Light from "../light/Light";
import "./systemStatus.css";

function SystemStatus() {
  const [statusList, setStatusList] = useState();
  const [resData, setResData] = useState();

  useEffect(() => {
    let id;
    const setStatus = async () => {
      const list = [];
      const res = await fetchData.getStatus();
      for (let status in res[0]) {
        list.push(status);
      }
      setResData(res[0]);
      setStatusList(list);
    };
    setStatus();
    try {
      id = setInterval(setStatus, 10000);
    } catch (error) {
      toast.error(error);
    }

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="systemStatus__container">
        <p className="systemStatus__title">Trạng thái hệ thống</p>
        <div className="systemStatus__lights">
          {statusList &&
            statusList.map(
              (item, index) =>
                item !== "_id" && (
                  <div key={index} className="systemStatus__lights-item">
                    <Light on={resData[item]} label={item} />
                  </div>
                )
            )}
        </div>
      </div>
    </>
  );
}

export default SystemStatus;
