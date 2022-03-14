import { CREER_LIST_START, CREER_LIST_SUCCESS, CREER_LIST_FAILED, CREER_LIST_STATUS_CANCEL, DELETE } from "../../types/todo/todo"

export const creerListStart = () => {
    return {
        type: CREER_LIST_START
    }
}

export const creerListSuccess = (data) => {
    return {
        type: CREER_LIST_SUCCESS,
        data:data
    }
}

export const createListFail = (errorcode) => {
    return {
        type: CREER_LIST_FAILED,
        errorcode: errorcode
    }
}


export const createListService = (data) => {

    return dispatch => {
        dispatch(creerListStart())
        dispatch(creerListSuccess(data))
    }
}


export const creerListStatusCancel = () => {
    return {
        type: CREER_LIST_STATUS_CANCEL
    }
}

export const deleteListService = (dataId) => {
  
    return {
        type: DELETE,
         dataId : dataId

    }
}