import axiosClient from "./axiosClient";

const fetchData = {
  getProductsReport: (query) =>
    axiosClient.get("/API/products", { params: query }),
  getAlarms: () => axiosClient.get("/API/alarms"),
  getStatus: () => axiosClient.get("/API/status"),
};

export default fetchData;
