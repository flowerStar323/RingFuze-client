import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USERS_BY_PAYLOAD_REQUEST,
    FETCH_USERS_BY_PAYLOAD_SUCCESS,
    FETCH_USERS_BY_PAYLOAD_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
  } from "../../constants/user"
  
  const initialState = { data: {}, loading: false, errors: [] }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return { ...state, loading: true }
      case FETCH_USER_SUCCESS:
        return { ...state, loading: false, data: action.payload, errors: [] }
      case FETCH_USER_FAILURE:
        return { ...state, loading: false, errors: action.errors }
      case FETCH_USERS_BY_PAYLOAD_REQUEST:
        return { ...state, loading: true }
      case FETCH_USERS_BY_PAYLOAD_SUCCESS:
        return { ...state, loading: false, data: action.payload, errors: [] }
      case FETCH_USERS_BY_PAYLOAD_FAILURE:
        return { ...state, loading: false, errors: action.errors }
      case CREATE_USER_REQUEST:
        return { ...state, loading: true }
      case CREATE_USER_SUCCESS:
        return { ...state, loading: false, data: action.payload, errors: [] }
      case CREATE_USER_FAILURE:
        return { ...state, loading: false, errors: action.errors }
      case UPDATE_USER_REQUEST:
        return { ...state, loading: true }
      case UPDATE_USER_SUCCESS:
        return { ...state, loading: false }
      case UPDATE_USER_FAILURE:
        return { ...state, loading: false, errors: action.errors }
      default:
        return state
    }
  }
  
  export default reducer
  