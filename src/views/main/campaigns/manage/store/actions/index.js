import axios from 'axios'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('/api/campaigns/list/all-data').then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data
      })
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get('/api/campaigns/list/data', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.campaigns,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Get Campaign
export const getUser = id => {
  return async dispatch => {
    await axios
      .get('/api/campaigns/campaign', { id })
      .then(response => {
        dispatch({
          type: 'GET_USER',
          selectedUser: response.data.campaign
        })
      })
      .catch(err => console.log(err))
  }
}
