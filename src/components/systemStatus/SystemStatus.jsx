import Light from "../light/Light";
import "./systemStatus.css";

function SystemStatus() {
  const statusList = [
    { label: "emer", on: true },
    { label: "work", on: false },
    { label: "stop", on: true },
    { label: "reset", on: true },
    { label: "auto", on: false },
    { label: "manual", on: true },
    { label: "sim_mode", on: true },
    { label: "remote", on: false },
    { label: "guard", on: true },
    { label: "p_en", on: true },
    { label: "paper", on: true },
  ];

  return (
    <>
      <div className="systemStatus__container">
        <p className="systemStatus__title">Trang thai he thong</p>
        <div className="systemStatus__lights">
          {statusList.map((item, index) => (
            <div key={index} className="systemStatus__lights-item">
              <Light on={item.on} label={item.label} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SystemStatus;
