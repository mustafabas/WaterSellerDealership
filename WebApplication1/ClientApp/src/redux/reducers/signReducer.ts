import { LOGIN_LOADING, LOGIN_STATUS, RESET_PROPS } from "../types";

const intialState = {
    loginLoading:false,
    isSucces :null
};

export interface Action {
    type: string;
    payload: any;
   
  }
  export interface State {
     loginLoading:boolean;
     isSucces:boolean | null;
  }
export default (state: State = intialState, action: Action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loginLoading:true
            };
            case LOGIN_STATUS:
                return {
                    loginLoading:false,
                    isSucces:action.payload
                }
                case RESET_PROPS:
                    return {
                        loginLoading:false,
                        isSucces:null
                    };
        default:
            return state;
    }
};
