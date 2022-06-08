import { UserAction, UserActionTypes, UserStateType } from "../../types/user"

const initialState: UserStateType = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserStateType => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case UserActionTypes.FETCH_USERS_SUCCES:
            return { ...state, loading: false, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}