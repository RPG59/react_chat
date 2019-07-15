import { userReducer } from "./reducers/user.reducer";
import { combineReducers } from "redux";
import { chatsReducer } from "./reducers/chats.reducer";
import { messageReducer } from "./reducers/message.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    chats: chatsReducer,
    messages: messageReducer

});

export default rootReducer;
