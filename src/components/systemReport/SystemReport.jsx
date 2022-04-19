import { useState } from "react";
import {
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./systemReport.css";

function SystemReport() {
  const data = [
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 10,
      boxInDay: 20,
      rollOfPaper: 30,
      productsInABox: 40,
    },
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 5,
      boxInDay: 10,
      rollOfPaper: 15,
      productsInABox: 20,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 15,
      boxInDay: 25,
      rollOfPaper: 35,
      productsInABox: 45,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 3,
      boxInDay: 7,
      rollOfPaper: 8,
      productsInABox: 2,
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
      boxInDay: 20,
      rollOfPaper: 30,
      productsInABox: 40,
    },
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 5,
      boxInDay: 10,
      rollOfPaper: 15,
      productsInABox: 20,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 15,
      boxInDay: 25,
      rollOfPaper: 35,
      productsInABox: 45,
    },
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 3,
      boxInDay: 7,
      rollOfPaper: 8,
      productsInABox: 2,
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
      boxInDay: 20,
      rollOfPaper: 30,
      productsInABox: 40,
    },
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 5,
      boxInDay: 10,
      rollOfPaper: 15,
      productsInABox: 20,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 15,
      boxInDay: 25,
      rollOfPaper: 35,
      productsInABox: 45,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 3,
      boxInDay: 7,
      rollOfPaper: 8,
      productsInABox: 2,
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
      boxInDay: 20,
      rollOfPaper: 30,
      productsInABox: 40,
    },
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 5,
      boxInDay: 10,
      rollOfPaper: 15,
      productsInABox: 20,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 15,
      boxInDay: 25,
      rollOfPaper: 35,
      productsInABox: 45,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 3,
      boxInDay: 7,
      rollOfPaper: 8,
      productsInABox: 2,
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
      boxInDay: 20,
      rollOfPaper: 30,
      productsInABox: 40,
    },
    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 5,
      boxInDay: 10,
      rollOfPaper: 15,
      productsInABox: 20,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 15,
      boxInDay: 25,
      rollOfPaper: 35,
      productsInABox: 45,
    },

    {
      id: 1,
      dateTime: "2021-12-14 18-38-02",
      productsInDay: 3,
      boxInDay: 7,
      rollOfPaper: 8,
      productsInABox: 2,
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
      <div className="systemReport__filter">
        <p className="systemReport__title">Báo cáo sản xuất</p>
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

      <div className="systemReport__chart">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 8" />
            <XAxis dataKey="dateTime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="productsInDay" stroke="#8884d8" />
            <Line type="monotone" dataKey="boxInDay" stroke="#82ca9d" />
            <Line type="monotone" dataKey="rollOfPaper" stroke="#4da6ff" />
            <Line type="monotone" dataKey="productsInABox" stroke="#ff80bf" />
          </LineChart>
        </ResponsiveContainer>
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

        <div className="systemReport__printBtn">
          <button>Tải về file excel</button>
        </div>
      </div>
    </div>
  );
}

export default SystemReport;
