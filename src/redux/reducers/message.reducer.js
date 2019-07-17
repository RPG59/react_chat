export const UPDATE_MESSAGES = 'UPDATE_MESSAGES ';
const initialState = {
    messages: [],
    chatId: null
};

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages,
                chatId: action.payload.chatId
            };
        default:
            return state;

    }
}

