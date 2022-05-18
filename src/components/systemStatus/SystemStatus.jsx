import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import fetchData from "../../api/fetchData";
import Light from "../light/Light";
import Loading from "../loading/Loading";
import "./systemStatus.css";

function SystemStatus() {
  const [statusList, setStatusList] = useState();
  const [resData, setResData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let id;
    const setStatus = async () => {
      const list = [];
      const res = await fetchData.getStatus();
      setLoading(false);
      for (let status in res[0]) {
        list.push(status);
      }
      setResData(res[0]);
      setStatusList(list);
    };

    try {
      setLoading(true);
      setStatus();
      id = setInterval(setStatus, 5000);
    } catch (error) {
      setLoading(false);
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
      <Loading loading={loading} />
    </>
  );
}

export default SystemStatus;
