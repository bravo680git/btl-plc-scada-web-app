import { useState } from "react";
import "./systemReport.css";

function SystemReport() {
  const data = [
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 10,
      boxInDay: 10,
      rollOfPaper: 10,
      productsInABox: 10,
    },
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 10,
      boxInDay: 10,
      rollOfPaper: 10,
      productsInABox: 10,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 10,
      boxInDay: 10,
      rollOfPaper: 10,
      productsInABox: 10,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 10,
      boxInDay: 10,
      rollOfPaper: 10,
      productsInABox: 10,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 10,
      boxInDay: 10,
      rollOfPaper: 10,
      productsInABox: 10,
    },
  ];

  const [fromDate, setFromDate] = useState(() => {
    const nowDate = new Date();
    const prevDate = new Date(nowDate.setDate(nowDate.getDate() - 7));
    return prevDate.toJSON().split("T")[0];
  });
  const [endDate, setEndDate] = useState(() => {
    const nowDate = new Date();
    return nowDate.toJSON().split("T")[0];
  });

  return (
    <div className="systemReport__container">
      <p className="systemReport__title">Báo cáo sản xuất</p>

      <div className="systemReport__filter">
        <div>
          <label htmlFor="fromDate">Từ ngày</label>
          <input
            name="fromDate"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="endDate">Đến ngày</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button>Tìm</button>
      </div>

      <div className="systemReport__table">
        <div>
          <table>
            <thead>
              <tr>
                <td>Stt</td>
                <td>Thời gian</td>
                <td>Số sản phẩm trên ngày</td>
                <td>Số họp trên ngày</td>
                <td>Số cuộn giấy</td>
                <td>Số sản phẩm trong một hộp</td>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.dateTime}</td>
                  <td>{item.productsInDay}</td>
                  <td>{item.boxInDay}</td>
                  <td>{item.rollOfPaper}</td>
                  <td>{item.productsInABox}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="systemReport__printBtn">
        <button>Tải về file excel</button>
      </div>
    </div>
  );
}

export default SystemReport;
