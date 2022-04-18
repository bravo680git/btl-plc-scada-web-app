import "./systemAlarm.css";

function SystemAlarm() {
  const alarms = [
    {
      no: 1,
      date: "18/04/2022 10:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 2,
      date: "18/04/2022 11:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 3,
      date: "18/04/2022 12:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 4,
      date: "18/04/2022 13:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 5,
      date: "18/04/2022 10:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 6,
      date: "18/04/2022 11:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 7,
      date: "18/04/2022 12:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 8,
      date: "18/04/2022 13:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 9,
      date: "18/04/2022 10:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 10,
      date: "18/04/2022 11:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 11,
      date: "18/04/2022 12:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
    {
      no: 12,
      date: "18/04/2022 13:19:30",
      status: 3,
      message: "Tín hiệu mạng yếu",
    },
  ];

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
              {alarms.map((item, index) => (
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
