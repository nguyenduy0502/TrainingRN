import {FETCH_FAIL, FETCH_OK, FETCHING} from './types';
import {getData} from '../api/newsAPI';
export function fetchingData() {

    return {
        type: FETCHING
    }
}
export function fetchDataSuccess(data) {
    return {
        type: FETCH_OK,
        payload: data,
    }
}
export function fetchDataFail() {
    return {
        type: FETCH_FAIL
    }
}
export function processAPI() {
    return (dispatch) => {
        dispatch(fetchingData());
        getData().then((res) => {

            dispatch(fetchDataSuccess(res))

        }).catch((err) => dispatch(fetchDataFail()));


    }
}


