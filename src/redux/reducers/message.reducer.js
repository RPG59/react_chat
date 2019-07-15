export const UPDATE_MESSAGES = 'UPDATE_MESSAGES ';
const initialState = [];

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MESSAGES:
            return action.payload;
        default:
            return state;

    }
}

