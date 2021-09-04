import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  FETCH_ACCESS_TOKEN,
  LOGOUT
} from "../../constants/auth"

// **  Initial State
const initialState = {
  authenticated: false,
  userData: {},
  userToken: {
    access_token: "",
    expires_in: 3600,
    refresh_token: "",
    token_type: "Bearer"
  },
  loading: false,
  errors: []
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_REQUEST:
      return { ...state, loading: true }
    case AUTHENTICATE_SUCCESS:
      return { ...state, loading: false, authenticated: true, userToken: action.payload, errors: [] }
    case AUTHENTICATE_FAILURE:
      return { ...state, loading: false, errors: action.errors }
    case LOGOUT:
      return { ...state, loading: false, authenticated: false, errors: [] }
    case FETCH_ACCESS_TOKEN:
      return {
        ...state,
        loading: false,
        userToken: action.payload,
        errors: []
      }
    default:
      return state
  }
}

export default authReducer
