import axios from "axios";
import {BASE_URL,DELETE_VOTE_API,GET_VOTE_API,POST_VOTE_API,} from "../../constant";

export async function get_vote_api() {
  return axios
    .get(BASE_URL + GET_VOTE_API)
    .then((res) => {
      const data = res.data.Data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      return error;
    });
}

export function post_vote_api(action) {
  return axios
    .post(BASE_URL + POST_VOTE_API, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      return error;
    });
}

export function delete_vote_api(action) {
  return axios
    .delete(BASE_URL + DELETE_VOTE_API + action.payload._id)
    .then((res) => {
      const data = action.payload._id;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      return error;
    });
}
