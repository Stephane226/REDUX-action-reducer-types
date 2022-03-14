import * as actionTypes from '../../types/todo/todo'

const initialState = {
    loading: false,
    todolist: [],
    error: false,
    creerliststatus: false,
    deleteliststatus : false,
}
console.log(initialState.todolist)
const ReducerTodo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREER_LIST_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actionTypes.CREER_LIST_SUCCESS:
            return {
                ...state,
                todolist: state.todolist.concat(action.data),
                creerliststatus: true,
                loading: false,
                error: false 
            }
            case actionTypes.DELETE:
                return {
                    ...state,
                    todolist: state.todolist.filter(index => index.id !== action.dataId),
                    deleteliststatus: true,
                    loading: false,
                    error: false
                }
        case actionTypes.CREER_LIST_FAILED:
            return {
                ...state,
                error: true,
                loading: false,
                errorcode: action.errorcode,
            }

        case actionTypes.CREER_LIST_STATUS_CANCEL:
            return {
                ...state,
                creerliststatus: false
            }
        default:
            return state
    }
}

export default ReducerTodo