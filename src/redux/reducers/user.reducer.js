export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
const initialState = {
    id: null,
    username: null,
    avatar: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                avatar: action.payload.avatar
            };
        case LOGOUT_USER:
            return state;
        default:
            return state;
    }

}
