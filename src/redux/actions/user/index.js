import Axios from "../../../utility/axios"

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

const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST })
const fetchUserSuccess = (payload) => ({ type: FETCH_USER_SUCCESS, payload })
const fetchUserFailure = (errors) => ({ type: FETCH_USER_FAILURE, errors })

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserRequest())
  try {
    const response = await Axios.get("/me")
    if (response.status === 200) {
      return dispatch(fetchUserSuccess(response.data))
    }
    return dispatch(fetchUserFailure(response.data.message))
  } catch (e) {
    return dispatch(fetchUserFailure(e))
  }
}

const fetchUsersByPayloadRequest = () => ({ type: FETCH_USERS_BY_PAYLOAD_REQUEST })
const fetchUsersByPayloadSuccess = (payload) => ({ type: FETCH_USERS_BY_PAYLOAD_SUCCESS, payload })
const fetchUsersByPayloadFailure = (errors) => ({ type: FETCH_USERS_BY_PAYLOAD_FAILURE, errors })

export const fetchUsersByPayload = (params) => async (dispatch) => {
  dispatch(fetchUsersByPayloadRequest())
  try {
    const response = await Axios.post("/users/getUsersByPayload", params)
    if (response.status === 200) {
      return dispatch(fetchUsersByPayloadSuccess(response.data))
    }
    return dispatch(fetchUsersByPayloadFailure(response.data.message))
  } catch (e) {
    return dispatch(fetchUsersByPayloadFailure(e))
  }
}

const createUserRequest = () => ({ type: CREATE_USER_REQUEST })
const createUserSuccess = (payload) => ({ type: CREATE_USER_SUCCESS, payload })
const createUserFailure = (errors) => ({ type: CREATE_USER_FAILURE, errors })

export const createUser = (params) => async (dispatch) => {
  dispatch(createUserRequest())
  try {
    const response = await Axios.post("/users", params)
    const resData = response.data

    if (resData.success) {
      return dispatch(createUserSuccess(resData.data))
    }
    return dispatch(createUserFailure(resData.message))
  } catch (e) {
    return dispatch(createUserFailure(e))
  }
}

const updateUserRequest = () => ({ type: UPDATE_USER_REQUEST })
const updateUserSuccess = (payload) => ({ type: UPDATE_USER_SUCCESS, payload })
const updateUserFailure = (errors) => ({ type: UPDATE_USER_FAILURE, errors })

export const updateUser = (userId, params) => async (dispatch) => {
  dispatch(updateUserRequest())
  try {
    const response = await Axios.put(`/users/${userId}`, {
      ...params
    })
    if (response.status === 200) {
      return dispatch(updateUserSuccess(response.data))
    }
    return dispatch(updateUserFailure(response.data.message))
  } catch (e) {
    return dispatch(updateUserFailure(e))
  }
}

const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST })
const deleteUserSuccess = (payload) => ({ type: DELETE_USER_SUCCESS, payload })
const deleteUserFailure = (errors) => ({ type: DELETE_USER_FAILURE, errors })

export const deleteUser = (userId, params) => async (dispatch) => {
  dispatch(deleteUserRequest())
  try {
    const response = await Axios.put(`/users/${userId}`, {
      ...params
    })
    if (response.status === 200) {
      return dispatch(deleteUserSuccess(response.data))
    }
    return dispatch(deleteUserFailure(response.data.message))
  } catch (e) {
    return dispatch(deleteUserFailure(e))
  }
}
