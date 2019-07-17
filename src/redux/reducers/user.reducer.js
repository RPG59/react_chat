export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const INVALID_USER = 'INVALID_USER';
const initialState = {
    userId: null,
    username: null,
    avatar: null,
    errorMsg: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userId: action.payload.userId,
                username: action.payload.username,
                avatar: action.payload.avatar
            };
        case INVALID_USER:
            return {
                ...state,
                errorMsg: action.payload.errorMsg
            };
        case LOGOUT_USER:
            return state;
        default:
            return state;
    }

}
