import { USER_GET, reset, USER_LOADING } from "../types"

import { Action } from "../reducers/getStoreListReducer"
import { Dispatch } from "redux";
import axios from 'axios';
import { GET_USER } from "../constants";
import { IUserInformation } from "../../model/userModel";

export function getUserInfo() {

    return (dispatch: Dispatch<Action>) => {
        dispatch(loading(true));
        console.log("serId",localStorage.getItem("userId"));
        var userId = localStorage.getItem("userId");
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        axios.get(GET_USER + `?userId=${userId}`,
            { headers: headers }
        ).then((response: any) => {

            if (response.data.isSuccess) {
                var user = response.data.result.user;
                var userInformation: IUserInformation = {
                    active: user.active,
                    createdDate: user.createdDate,
                    email: user.email,
                    id: user.id,
                    nameSurname: user.nameSurname,
                    oldPassword: user.oldPassword,
                    userType: user.userType,
                    password: user.password,
                    updatedDate: ''
                };
                dispatch(userInfo(userInformation));
            }
            else {
                dispatch(loading(false));
            }
         
        }).catch((err) => {
            console.log("Error:", err);
        });

    }

}


export const loading = (val: boolean) => ({
    type: USER_LOADING,
    payload: val
})
export const userInfo = (val: IUserInformation) => ({
    type: USER_GET,
    payload: val
})