import {FETCH_FAIL, FETCH_OK, FETCHING} from '../actions/types';


const DEFAULT_STATE = {
    data: {},
    isFetching: false,
    error: false,
    isFetched: false

};
export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {

        case FETCHING:
            return {
                ...state,
                isFetching: true

            };
        case FETCH_OK:
            return {
                ...state,
                data: action.payload,
                isFetched: true,
                isFetching:false,
                error:false
            };
        case FETCH_FAIL:
            return {
                ...state,
                error:true,
                isFetching: false,
                isFetched: false
            };
        default:
            return state

    }


}