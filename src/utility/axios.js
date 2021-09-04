import Axios from 'axios'
import * as TokenService from '../services/TokenService'

const accessToken = TokenService.getAccessToken().access_token
export const API_HOST = 'http://localhost:5000'
// export const API_HOST = 'http://ec2-3-227-13-40.compute-1.amazonaws.com:5000/';
// const API_HOST = process.env.REACT_APP_API_URL

export default Axios.create({
  baseURL: API_HOST,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${accessToken}`
  },
  timeout: 100000
})