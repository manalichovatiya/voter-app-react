import axios from "axios";
import {BASE_URL, DELETE_CONNECT_API, GET_CONNECT_API, POST_CONNECT_API,} from "../../constant";

export async function get_connect_api() {
  return axios
    .get(BASE_URL + GET_CONNECT_API)
    .then((res) => {
      const data = res.data.Data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      return error;
    });
}

export function post_connect_api(action) {
  const connect = {
    Election: action.payload.Election,
    Party: action.payload.Party,
  };
  return axios
    .post(BASE_URL + POST_CONNECT_API, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      return error;
    });
}

export function delete_connect_api(action) {
  return axios
    .delete(BASE_URL + DELETE_CONNECT_API + action.payload._id)
    .then((res) => {
      const data = action.payload._id;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      return error;
    });
}
