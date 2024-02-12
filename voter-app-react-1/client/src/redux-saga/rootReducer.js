import { combineReducers } from "redux";
import ElectionReducer from "./Admin/Election/Reducer";
import PartyReducer from "./Admin/Party/Reducer";
import UserReducer from "./Admin/User/Reducer"
import ConnectReducer from "./Admin/Connect/Reducer";
import VoteReducer from "./User/Vote/Reducer"

const rootReducer = combineReducers({
  ElectionReducer,
  PartyReducer,
  UserReducer,
  ConnectReducer,
  VoteReducer,
});

export default rootReducer;