// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedCampaign: null
}

const campaigns = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_CAMPAIGN':
      return { ...state, selectedCampaign: action.selectedCampaign }
    default:
      return { ...state }
  }
}
export default campaigns
