import {DELETE_PARTY_ERROR,DELETE_PARTY_PROGRESS,DELETE_PARTY_SUCCESS,GET_PARTY_ERROR,GET_PARTY_PROGRESS,GET_PARTY_SUCCESS,POST_PARTY_ERROR,POST_PARTY_PROGRESS,POST_PARTY_SUCCESS,UPDATE_PARTY_ERROR,UPDATE_PARTY_PROGRESS,UPDATE_PARTY_SUCCESS,} from "./Action";

const initialState = {
  data: [],
  isLoding: false,
  isError: null,
};

const PartyReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case GET_PARTY_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case GET_PARTY_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: action.data,
        isError: null,
      };
    case GET_PARTY_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case POST_PARTY_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case POST_PARTY_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.concat(action.data.Data),
        isError: null,
      };
    case POST_PARTY_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case DELETE_PARTY_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case DELETE_PARTY_SUCCESS:
      const filterParty = state.data.filter((val) => val._id !== action.data);
      return {
        ...state,
        isLoding: false,
        data: filterParty,
        isError: null,
      };
    case DELETE_PARTY_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case UPDATE_PARTY_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case UPDATE_PARTY_SUCCESS:
      const updatedData = state.data.map((item) =>
        item._id === action.data._id ? action.data : item
      );
      return {
        ...state,
        isLoading: false,
        data: updatedData,
        isError: null,
      };

    case UPDATE_PARTY_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    default: {
      return { ...state };
    }
  }
};
export default PartyReducer;
