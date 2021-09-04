import Axios from "../utility/axios"

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken")
  let payload = {
    access_token: "",
    expires_in: 3600,
    refresh_token: "",
    token_type: "Bearer"
  }

  if (
    accessToken !== "undefined" &&
    accessToken !== null &&
    accessToken !== ""
  ) {
    payload = JSON.parse(localStorage.getItem("accessToken"))
  }
  return payload
}

export const getUserData = () => {
  const userData = localStorage.getItem("userData")

  return userData ? JSON.parse(userData) : null
}

export const setAccessToken = (payload) => {
  localStorage.setItem("accessToken", JSON.stringify(payload))
}

export const setUserData = (payload) => {
  localStorage.setItem("userData", JSON.stringify(payload))
}

export const removeItem = () => {
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
}

export const refreshAccessToken = async () => {
  try {
    const refreshToken = getAccessToken().refresh_token
    const payload = {
      grant_type: "refresh_token",
      refresh_token: refreshToken
    }
    const response = await Axios.post("/v1/oauth/token", payload)
    return response.data
  } catch (e) {
    return e
  }
}

