import axios from 'axios'

// ** Get table Data
export const getData = (params) => {
  return async (dispatch) => {
    await axios.get('/api/disputesTable/data', params).then((response) => {
      dispatch({
        type: 'GET_DATA',
        allData: response.data.allData,
        data: response.data.invoices,
        totalPages: response.data.total,
        params
      })
    })
  }
}
