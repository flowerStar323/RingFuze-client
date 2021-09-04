import Axios from "../../../utility/axios"

import {
  FETCH_NUMBERS_REQUEST,
  FETCH_NUMBERS_SUCCESS,
  FETCH_NUMBERS_FAILURE,
  FETCH_SIGNED_PUBLISHERS_REQUEST,
  FETCH_SIGNED_PUBLISHERS_SUCCESS,
  FETCH_SIGNED_PUBLISHERS_FAILURE,
  CREATE_NUMBER_REQUEST,
  CREATE_NUMBER_SUCCESS,
  CREATE_NUMBER_FAILURE,
  UPDATE_NUMBER_REQUEST,
  UPDATE_NUMBER_SUCCESS,
  UPDATE_NUMBER_FAILURE,
  DELETE_NUMBER_REQUEST,
  DELETE_NUMBER_SUCCESS,
  DELETE_NUMBER_FAILURE,
  FETCH_TWILLO_NUMBERS_REQUEST,
  FETCH_TWILLO_NUMBERS_SUCCESS,
  FETCH_TWILLO_NUMBERS_FAILURE,
  PURCHASE_TWILLO_NUMBER_REQUEST,
  PURCHASE_TWILLO_NUMBER_SUCCESS,
  PURCHASE_TWILLO_NUMBER_FAILURE,
  PRICING_TWILLO_NUMBER_REQUEST,
  PRICING_TWILLO_NUMBER_SUCCESS,
  PRICING_TWILLO_NUMBER_FAILURE,
  RELEASE_TWILLO_NUMBER_REQUEST,
  RELEASE_TWILLO_NUMBER_SUCCESS,
  RELEASE_TWILLO_NUMBER_FAILURE,
  CREATE_TWILLO_SUB_ACCOUNT_REQUEST,
  CREATE_TWILLO_SUB_ACCOUNT_SUCCESS,
  CREATE_TWILLO_SUB_ACCOUNT_FAILURE,
  ACCEPT_TWILLO_CALL_REQUEST,
  ACCEPT_TWILLO_CALL_SUCCESS,
  ACCEPT_TWILLO_CALL_FAILURE,
  REJECT_TWILLO_CALL_REQUEST,
  REJECT_TWILLO_CALL_SUCCESS,
  REJECT_TWILLO_CALL_FAILURE,
  SET_ASSIGN_PUBLISHER
} from "../../constants/numbers"

const fetchNumbersRequest = () => ({ type: FETCH_NUMBERS_REQUEST })
const fetchNumbersSuccess = (payload) => ({ type: FETCH_NUMBERS_SUCCESS, payload })
const fetchNumbersFailure = (errors) => ({ type: FETCH_NUMBERS_FAILURE, errors })

export const fetchNumbers = () => async (dispatch) => {
  dispatch(fetchNumbersRequest())
  try {
    const response = await Axios.get("/numbers")
    const resData = response.data
    if (resData.success) {
      return dispatch(fetchNumbersSuccess(resData))
    }
    return dispatch(fetchNumbersFailure(resData.message))
  } catch (e) {
    return dispatch(fetchNumbersFailure(e))
  }
}

const fetchSignedPublishersRequest = () => ({ type: FETCH_SIGNED_PUBLISHERS_REQUEST })
const fetchSignedPublishersSuccess = (payload) => ({ type: FETCH_SIGNED_PUBLISHERS_SUCCESS, payload })
const fetchSignedPublishersFailure = (errors) => ({ type: FETCH_SIGNED_PUBLISHERS_FAILURE, errors })

export const fetchSignedPublishers = () => async (dispatch) => {
  dispatch(fetchSignedPublishersRequest())
  try {
    const response = await Axios.get("/numbers/getSingedPublishers")
    const resData = response.data
    if (resData.success) {
      return dispatch(fetchSignedPublishersSuccess(resData))
    }
    return dispatch(fetchSignedPublishersFailure(resData.message))
  } catch (e) {
    return dispatch(fetchSignedPublishersFailure(e))
  }
}

const createNumberRequest = () => ({ type: CREATE_NUMBER_REQUEST })
const createNumberSuccess = (payload) => ({ type: CREATE_NUMBER_SUCCESS, payload })
const createNumberFailure = (errors) => ({ type: CREATE_NUMBER_FAILURE, errors })

export const createNewNumber = (params) => async (dispatch) => {
  dispatch(createNumberRequest())
  try {
    const response = await Axios.post("/numbers", params)
    const resData = response.data

    if (resData.success) {
      return dispatch(createNumberSuccess(resData.data))
    }
    return dispatch(createNumberFailure(resData.message))
  } catch (e) {
    return dispatch(createNumberFailure(e))
  }
}

const updateNumberRequest = () => ({ type: UPDATE_NUMBER_REQUEST })
const updateNumberSuccess = (payload) => ({ type: UPDATE_NUMBER_SUCCESS, payload })
const updateNumberFailure = (errors) => ({ type: UPDATE_NUMBER_FAILURE, errors })

export const updateNumber = (id, params) => async (dispatch) => {
  dispatch(updateNumberRequest())
  try {
    const response = await Axios.put(`/numbers/${id}`, params)
    const resData = response.data

    if (resData.success) {
      return dispatch(updateNumberSuccess(resData.data))
    }
    return dispatch(updateNumberFailure(resData.message))
  } catch (e) {
    return dispatch(updateNumberFailure(e))
  }
}

const deleteNumberRequest = () => ({ type: DELETE_NUMBER_REQUEST })
const deleteNumberSuccess = (payload) => ({ type: DELETE_NUMBER_SUCCESS, payload })
const deleteNumberFailure = (errors) => ({ type: DELETE_NUMBER_FAILURE, errors })

export const deleteNumber = (id) => async (dispatch) => {
  dispatch(deleteNumberRequest())
  try {
    const response = await Axios.delete(`/numbers/${id}`)
    const resData = response.data

    if (resData.success === 200) {
      return dispatch(deleteNumberSuccess(resData.data))
    }
    return dispatch(deleteNumberFailure(resData.message))
  } catch (e) {
    return dispatch(deleteNumberFailure(e))
  }
}


// Twillo APIs

const fetchTwilloNumbersRequest = () => ({ type: FETCH_TWILLO_NUMBERS_REQUEST })
const fetchTwilloNumbersSuccess = (payload) => ({ type: FETCH_TWILLO_NUMBERS_SUCCESS, payload })
const fetchTwilloNumbersFailure = (errors) => ({ type: FETCH_TWILLO_NUMBERS_FAILURE, errors })

export const fetchTwilloNumbers = (params) => async (dispatch) => {
  dispatch(fetchTwilloNumbersRequest())
  try {
    const response = await Axios.post("/twillo/phoneNumbers", params)
    const resData = response.data
    if (resData.success) {
      return dispatch(fetchTwilloNumbersSuccess(resData.data))
    }
    return dispatch(fetchTwilloNumbersFailure(resData.message))
  } catch (e) {
    return dispatch(fetchTwilloNumbersFailure(e))
  }
}

const purchaseTwilloNumberRequest = () => ({ type: PURCHASE_TWILLO_NUMBER_REQUEST })
const purchaseTwilloNumberSuccess = (payload) => ({ type: PURCHASE_TWILLO_NUMBER_SUCCESS, payload })
const purchaseTwilloNumberFailure = (errors) => ({ type: PURCHASE_TWILLO_NUMBER_FAILURE, errors })

export const purchaseTwilloNumber = (params) => async (dispatch) => {
  dispatch(purchaseTwilloNumberRequest());
  try {
    const response = await Axios.post("/twillo/purchaseNumber", params)
    const resData = response.data
    console.log(response)
    if (resData.success) {
      return dispatch(purchaseTwilloNumberSuccess(resData.data))
    }
    return dispatch(purchaseTwilloNumberFailure(resData.message))
  } catch (e) {
    return dispatch(purchaseTwilloNumberFailure(e))
  }
}

const pricingTwilloNumberRequest = () => ({ type: PRICING_TWILLO_NUMBER_REQUEST })
const pricingTwilloNumberSuccess = (payload) => ({ type: PRICING_TWILLO_NUMBER_SUCCESS, payload })
const pricingTwilloNumberFailure = (errors) => ({ type: PRICING_TWILLO_NUMBER_FAILURE, errors })

export const pricingTwilloNumber = (params) => async (dispatch) => {
  dispatch(pricingTwilloNumberRequest())
  try {
    const response = await Axios.post("/twillo/pricingNumbers", params)
    const resData = response.data
    if (resData.success) {
      return dispatch(pricingTwilloNumberSuccess(resData.data))
    }
    return dispatch(pricingTwilloNumberFailure(resData.message))
  } catch (e) {
    return dispatch(pricingTwilloNumberFailure(e))
  }
}

const releaseTwilloNumberRequest = () => ({ type: RELEASE_TWILLO_NUMBER_REQUEST })
const releaseTwilloNumberSuccess = (payload) => ({ type: RELEASE_TWILLO_NUMBER_SUCCESS, payload })
const releaseTwilloNumberFailure = (errors) => ({ type: RELEASE_TWILLO_NUMBER_FAILURE, errors })

export const releaseTwilloNumber = (params) => async (dispatch) => {
  dispatch(releaseTwilloNumberRequest())
  try {
    const response = await Axios.post("/twillo/releaseNumber", params)
    const resData = response.data
    if (resData.success) {
      return dispatch(releaseTwilloNumberSuccess(resData.data))
    }
    return dispatch(releaseTwilloNumberFailure(resData.message))
  } catch (e) {
    return dispatch(releaseTwilloNumberFailure(e))
  }
}

const createTwilloSubAccountRequest = () => ({ type: CREATE_TWILLO_SUB_ACCOUNT_REQUEST })
const createTwilloSubAccountSuccess = (payload) => ({ type: CREATE_TWILLO_SUB_ACCOUNT_SUCCESS, payload })
const createTwilloSubAccountFailure = (errors) => ({ type: CREATE_TWILLO_SUB_ACCOUNT_FAILURE, errors })

export const createTwilloSubAccount = (params) => async (dispatch) => {
  dispatch(createTwilloSubAccountRequest())
  try {
    const response = await Axios.post("/twillo/createSubAccount", params)
    const resData = response.data
    if (resData.success) {
      return dispatch(createTwilloSubAccountSuccess(resData.data))
    }
    return dispatch(createTwilloSubAccountFailure(resData.message))
  } catch (e) {
    return dispatch(createTwilloSubAccountFailure(e))
  }
}

const acceptTwilloCallRequest = () => ({ type: ACCEPT_TWILLO_CALL_REQUEST })
const acceptTwilloCallSuccess = (payload) => ({ type: ACCEPT_TWILLO_CALL_SUCCESS, payload })
const acceptTwilloCallFailure = (errors) => ({ type: ACCEPT_TWILLO_CALL_FAILURE, errors })

export const acceptTwilloCall = () => async (dispatch) => {
  dispatch(acceptTwilloCallRequest())
  try {
    const response = await Axios.post("/twillo/acceptIncomingCall")
    const resData = response.data
    if (resData.success) {
      return dispatch(acceptTwilloCallSuccess(resData.message))
    }
    return dispatch(acceptTwilloCallFailure(resData.message))
  } catch (e) {
    return dispatch(acceptTwilloCallFailure(e))
  }
}

const rejectTwilloCallRequest = () => ({ type: REJECT_TWILLO_CALL_REQUEST })
const rejectTwilloCallSuccess = (payload) => ({ type: REJECT_TWILLO_CALL_SUCCESS, payload })
const rejectTwilloCallFailure = (errors) => ({ type: REJECT_TWILLO_CALL_FAILURE, errors })

export const rejectTwilloCall = (params) => async (dispatch) => {
  dispatch(rejectTwilloCallRequest())
  try {
    const response = await Axios.post("/twillo/rejectIncomingCall", params)
    const resData = response.data
    if (resData.success) {
      return dispatch(rejectTwilloCallSuccess(resData.message))
    }
    return dispatch(rejectTwilloCallFailure(resData.message))
  } catch (e) {
    return dispatch(rejectTwilloCallFailure(e))
  }
}
export const assignpublisher = (params) => async (dispatch) => {
  // dispatch(rejectTwilloCallRequest())
  try {

    const response = await Axios.post("/numbers/assign", params)
    // const resData = response.data
    console.log(response);
    // if (resData.success) {
    //   return dispatch(rejectTwilloCallSuccess(resData.message))
    // }
    // return dispatch(rejectTwilloCallFailure(resData.message))
  } catch (e) {
    // return dispatch(rejectTwilloCallFailure(e))
  }
}