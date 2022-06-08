export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCES = 'FETCH_TODOS_SUCCES',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

export type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type TodoStateType = {
    todos: TodoType[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

type fetchTodosActionType = {
    type: TodoActionTypes.FETCH_TODOS;
}

type fetchTodosSuccesActionType = {
    type: TodoActionTypes.FETCH_TODOS_SUCCES;
    payload: TodoType[];
}

type fetchTodosErrorActionType = {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

type setTodoPageActionType = {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction =
    fetchTodosActionType
    | fetchTodosSuccesActionType
    | fetchTodosErrorActionType
    | setTodoPageActionType;