export const UPDATE_CHATS = 'UPDATE_CHATS';
const initialState = [];

export function chatsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CHATS:
            return action.payload;
        default:
            return state;

    }
}
