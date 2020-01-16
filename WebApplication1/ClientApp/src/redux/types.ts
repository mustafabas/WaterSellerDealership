export const GETDATA = "GetData";
export const STORE_LOADING ="GetStoreLoading";

export const LOGIN_LOADING = "LoginLoading";
export const LOGIN_STATUS ="LoginStatus";
export const USER_LOADING = "UserLoading";
export const USER_GET = "UserGet";


export const RESET_PROPS ="RESET_PROPS";

export const reset = () => ({
    type: RESET_PROPS,
    payload: true
})