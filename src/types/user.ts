export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export type UserType = {
    id: number;
    name: string;
    email: string;
}

export type UserStateType = {
    users: UserType[];
    loading: boolean;
    error: null | string;
}

type FetchUserActionType = {
    type: UserActionTypes.FETCH_USERS;
}

type FetchUserSuccesActionType = {
    type: UserActionTypes.FETCH_USERS_SUCCES;
    payload: UserType[];
}

type FetchUserErrorActionType = {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction =
    FetchUserActionType
    | FetchUserSuccesActionType
    | FetchUserErrorActionType;