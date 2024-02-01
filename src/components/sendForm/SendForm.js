import axios from "axios";

function getFormData(data) {
  return axios.post(
    "https://test-key-d6afb-default-rtdb.firebaseio.com/test.json",
    data
  );
}

export default getFormData;
