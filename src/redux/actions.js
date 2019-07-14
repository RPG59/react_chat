import { HttpService } from "../services/http.service";
import { LOGIN_USER } from "./reducers/user.reducer";

export class Actions {
    static setUserData = userData => ({
        type: LOGIN_USER,
        payload: userData
    });

    static loginUser = username => dispatch => {
        HttpService.login(username).then(user => {
            dispatch(Actions.setUserData(user));
        })
    };
}
