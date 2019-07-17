import { HttpService } from "../services/http.service";
import { INVALID_USER, LOGIN_USER } from "./reducers/user.reducer";
import { UPDATE_CHATS } from "./reducers/chats.reducer";
import { UPDATE_MESSAGES } from "./reducers/message.reducer";

export class Actions {
    static setUserData = userData => ({
        type: LOGIN_USER,
        payload: userData
    });

    static setInvalidUser = () => ({
        type: INVALID_USER,
        payload: {errorMsg: 'Invalid username'}
    });

    static loginUser = username => dispatch => {
        HttpService.login(username)
            .then(user => {
                dispatch(Actions.setUserData(user));
            })
            .catch(err => {
                dispatch(Actions.setInvalidUser());
            });
    };

    static updateChats = chatsData => ({
        type: UPDATE_CHATS,
        payload: chatsData
    });

    static fetchChats = userId => dispatch => {
        HttpService.fetchChats(userId)
            .then(chats => {
                dispatch(Actions.updateChats(chats));
            });
    };

    static updateMessages = (messages, chatId) => ({
        type: UPDATE_MESSAGES,
        payload: {
            messages,
            chatId
        }
    });

    static fetchMessages = chatId => dispatch => {
        HttpService.fetchMessages(chatId)
            .then(messages => {
                dispatch(Actions.updateMessages(messages, chatId));
            });
    };
}
