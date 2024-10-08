import { GET_USERS } from "./actionTypes";

const initialState = {
    users: []
}

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        default:
            return state
    }

}

export default reducer;