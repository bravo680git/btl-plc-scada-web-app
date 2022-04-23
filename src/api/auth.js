import axiosClient from "./axiosClient";

const authApi = {
  login: (account) => axiosClient.post("/API/auth/login", account),
};

export default authApi;
