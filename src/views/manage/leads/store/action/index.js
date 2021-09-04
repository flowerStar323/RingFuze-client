import axios from 'axios'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('/api/leads/list/all-data').then(response => {
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
    await axios.get('/api/leads/list/data', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.leads,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Get Lead
export const getLead = id => {
  return async dispatch => {
    await axios
      .get('/api/leads/lead', { id })
      .then(response => {
        dispatch({
          type: 'GET_LEAD',
          selectedLead: response.data.lead
        })
      })
      .catch(err => console.log(err))
  }
}
