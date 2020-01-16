import { LOGIN_LOADING, LOGIN_STATUS, RESET_PROPS, USER_LOADING, USER_GET } from "../types";
import { IUserInformation } from "../../model/userModel";

const intialState = {
    userLoading: false,
    user: {} as IUserInformation
};

export interface Action {
    type: string;
    payload: any;

}
export interface State {
    userLoading: boolean;
    user: IUserInformation;
}
export default (state: State = intialState, action: Action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                userLoading: true
            };
        case USER_GET:
            return {
                userLoading: false,
                user: action.payload
            }
        case RESET_PROPS:
            return {
                user: false,
                userLoading: null
            };
        default:
            return state;
    }
};
