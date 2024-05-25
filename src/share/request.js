import axios from "axios";
const base_url = "http://localhost:3030/api/";

const request = (url = "", method = "get", data = {}) => {
  return axios({
    url: base_url + url,
    method: method,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default request;
