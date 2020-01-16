import { LOGIN_STATUS, LOGIN_LOADING, reset } from "../types"

import { Action } from "../reducers/getStoreListReducer"
import { Dispatch } from "redux";
import axios from 'axios';
import { LOGIN_URL } from "../constants";
import { ILoginResponseModel } from "../../model/signModels";

export function LoginAction(username1: string, password1: string) {

    return (dispatch: Dispatch<Action>) => {
        dispatch(loading(true));    
console.log("email1",username1);

const headers = {
    'Content-Type': 'application/json'
}

axios.post(LOGIN_URL,{
            username: username1,
            password: password1
            },
            {headers:headers}
            ).then((response: any) => {
            if (response.data.isSuccess) {
                var model: ILoginResponseModel = {} as ILoginResponseModel;
                console.log(response.data,"user");
                localStorage.setItem("token", response.data.result.token);
                localStorage.setItem("userId", response.data.result.userId);
                localStorage.setItem("userEmail", response.data.result.userEmail);
                localStorage.setItem("userType", response.data.result.userType);

                dispatch(loginStatus(true));
            }
            else {
                dispatch(loginStatus(false));
            }
            dispatch(reset());
        }).catch((err) => {
            console.log("Error:", err);
        });

    }

}


export const loading = (val: boolean) => ({
    type: LOGIN_LOADING,
    payload: val
})
export const loginStatus = (val: boolean) => ({
    type: LOGIN_STATUS,
    payload: val
})