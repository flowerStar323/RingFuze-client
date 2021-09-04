import Axios from "../../../utility/axios"
import * as TokenService from "../../../services/TokenService"

import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  FETCH_ACCESS_TOKEN,
  LOGOUT
} from "../../constants/auth"

const authenticateRequest = () => ({ type: AUTHENTICATE_REQUEST })
const authenticateSuccess = (payload) => ({
  type: AUTHENTICATE_SUCCESS,
  payload
})
const authenticateFailure = (errors) => ({
  type: AUTHENTICATE_FAILURE,
  errors
})

export const authenticate = (params) => async (dispatch) => {
  dispatch(authenticateRequest())
  try {
    const response = await Axios.post("/login", params)

    const { data } = response.data
    if (data?.token?.access_token) {
      TokenService.setAccessToken(data?.token)
      TokenService.setUserData(data?.user)
      return dispatch(authenticateSuccess(data))
    }
    return dispatch(authenticateFailure(response.data.message))
  } catch (e) {
    return dispatch(authenticateFailure(e))
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    TokenService.removeItem()

    dispatch({ type: LOGOUT })
  }
}

export const setAuthenticated = () => ({ type: AUTHENTICATE_SUCCESS })

export const fetchAccessToken = () => (dispatch) => {
  return dispatch({
    type: FETCH_ACCESS_TOKEN,
    payload: TokenService.getAccessToken()
  })
}
