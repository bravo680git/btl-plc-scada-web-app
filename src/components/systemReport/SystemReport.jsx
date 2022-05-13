import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { toast } from "react-toastify";
import * as excel from "../../ultils/excel";
import fetchData from "../../api/fetchData";
import "./systemReport.css";

function SystemReport() {
  const employeeName = useSelector((state) => state.store.loginState.name);

  const [fromDate, setFromDate] = useState(() => {
    const nowDate = new Date();
    const prevDate = new Date(nowDate.setDate(nowDate.getDate() - 7));
    return prevDate.toJSON().split("T")[0];
  });

  const [endDate, setEndDate] = useState(() => {
    const nowDate = new Date();
    return nowDate.toJSON().split("T")[0];
  });
  const [data, setData] = useState();

  const search = async () => {
    try {
      const res = await fetchData.getProductsReport({ fromDate, endDate });
      if (res.length > 0) {
        setData(
          res.map((item) => {
            item.dateTime = item.dateTime.slice(0, 19);
            return item;
          })
        );
      } else {
        setData(null);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const downloadExcelFile = () => {
    let rowIndex = 4;
    const workbook = excel.createExcelFile();
    const sheet1 = workbook.getWorksheet("sheet1");
    const nowDate = new Date();

    data.map((item, index) => {
      sheet1.getRow(rowIndex).values = [
        index + 1,
        item.dateTime,
        item.productsInDay,
        item.boxsInDay,
        item.rollsOfPaper,
        item.productsInABox,
      ];
      rowIndex++;
    });

    sheet1.getCell(rowIndex + 1, 5).value = `Ngày xuất báo cáo: ${
      nowDate.toJSON().split("T")[0]
    }`;
    sheet1.getCell(rowIndex + 2, 5).value = `Nhân viên: ${employeeName}`;

    excel.saveExcelFile(workbook, "Bao cao san xuat");
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
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
          <button onClick={search}>Tìm</button>
        </div>
        {data ? (
          <>
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
                  <Line
                    type="monotone"
                    dataKey="productsInDay"
                    stroke="#8884d8"
                  />
                  <Line type="monotone" dataKey="boxsInDay" stroke="#82ca9d" />
                  <Line
                    type="monotone"
                    dataKey="rollsOfPaper"
                    stroke="#4da6ff"
                  />
                  <Line
                    type="monotone"
                    dataKey="productsInABox"
                    stroke="#ff80bf"
                  />
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
                        <td>{index + 1}</td>
                        <td>{item.dateTime.slice(0, 19)}</td>
                        <td>{item.productsInDay}</td>
                        <td>{item.boxsInDay}</td>
                        <td>{item.rollsOfPaper}</td>
                        <td>{item.productsInABox}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="systemReport__printBtn">
                <button onClick={downloadExcelFile}>Tải về file excel</button>
              </div>
            </div>
          </>
        ) : (
          <div className="not-found">Không có kết quả nào</div>
        )}
      </div>

      <div className="change-device-msg">
        Thiết bị không hỗ trợ xem báo cáo. Vui lòng sử dụng thiết bị có độ phân
        giải lớn hơn.
      </div>
    </div>
  );
}

export default SystemReport;
