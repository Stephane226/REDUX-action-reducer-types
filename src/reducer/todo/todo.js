import * as actionTypes from '../../types/todo/todo'

const initialState = {
    loading: false,
    todolist: [],
    error: false,
    creerliststatus: false,
    deleteliststatus : false,
    Viewİtemİd: null,
    updatedNom: null,
    updatedPrenom: null,
    updatedAge: null,
    updatedİd: null,
    updated0bj: {},


}


console.log(initialState.stateupdated0bj)

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

            case actionTypes.SEEITEM:
                return{
                    ...state,
                    Viewİtemİd: action.itemİd
                }

                case actionTypes.EDİTİTEM:
                    return{
                        ...state,
                        Viewİtemİd: action.itemİd 
                    }

                    case actionTypes.UPDATELİSTSERVİCE:
                        return{
                            ...state,
                            stateupdated0bj: state.todolist.findIndex(x => x.id === action.data.id),
                            updatedPrenom : action.data.prenom,
                            updatedNom : action.data.nom,
                            updatedAge : action.data.age,
                            updatedİd : action.data.id,
                            updated0bj : { "id":"ddd", "nom": "ddd", "prenom":"ddd","age":"ddd"},
                            todolist:  state.todolist.filter(index => index.id !== action.data.id).concat(action.data),


                        }
    

        default:
            return state
    }
}

export default ReducerTodo