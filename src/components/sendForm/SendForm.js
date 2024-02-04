import axios from "axios";

function getFormData(URL, data) {
  return axios.post(URL, data);
}

export default getFormData;
