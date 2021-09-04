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

const initialState = { data: {}, publishers: [], loading: false, errors: [] }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NUMBERS_REQUEST:
            return { ...state, loading: true }
        case FETCH_NUMBERS_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case SET_ASSIGN_PUBLISHER:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case FETCH_NUMBERS_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case FETCH_SIGNED_PUBLISHERS_REQUEST:
            return { ...state, loading: true }
        case FETCH_SIGNED_PUBLISHERS_SUCCESS:
            return { ...state, loading: false, publishers: action.payload, errors: [] }
        case FETCH_SIGNED_PUBLISHERS_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case CREATE_NUMBER_REQUEST:
            return { ...state, loading: true }
        case CREATE_NUMBER_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case CREATE_NUMBER_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case UPDATE_NUMBER_REQUEST:
            return { ...state, loading: true }
        case UPDATE_NUMBER_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case UPDATE_NUMBER_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case DELETE_NUMBER_REQUEST:
            return { ...state, loading: true }
        case DELETE_NUMBER_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case DELETE_NUMBER_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case FETCH_TWILLO_NUMBERS_REQUEST:
            return { ...state, loading: true }
        case FETCH_TWILLO_NUMBERS_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case FETCH_TWILLO_NUMBERS_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case PURCHASE_TWILLO_NUMBER_REQUEST:
            return { ...state, loading: true }
        case PURCHASE_TWILLO_NUMBER_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case PURCHASE_TWILLO_NUMBER_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case PRICING_TWILLO_NUMBER_REQUEST:
            return { ...state, loading: true }
        case PRICING_TWILLO_NUMBER_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case PRICING_TWILLO_NUMBER_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case RELEASE_TWILLO_NUMBER_REQUEST:
            return { ...state, loading: true }
        case RELEASE_TWILLO_NUMBER_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case RELEASE_TWILLO_NUMBER_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case CREATE_TWILLO_SUB_ACCOUNT_REQUEST:
            return { ...state, loading: true }
        case CREATE_TWILLO_SUB_ACCOUNT_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case CREATE_TWILLO_SUB_ACCOUNT_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case ACCEPT_TWILLO_CALL_REQUEST:
            return { ...state, loading: true }
        case ACCEPT_TWILLO_CALL_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case ACCEPT_TWILLO_CALL_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        case REJECT_TWILLO_CALL_REQUEST:
            return { ...state, loading: true }
        case REJECT_TWILLO_CALL_SUCCESS:
            return { ...state, loading: false, data: action.payload, errors: [] }
        case REJECT_TWILLO_CALL_FAILURE:
            return { ...state, loading: false, errors: action.errors }
        default:
            return state
    }
}

export default reducer
