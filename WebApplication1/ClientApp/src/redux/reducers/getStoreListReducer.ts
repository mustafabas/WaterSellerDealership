import { GETDATA, STORE_LOADING } from "../types";

const intialState = {
    isStoreLoading:false,
    stores : []
};

export interface Action {
    type: string;
    payload: any;
   
  }
  export interface StoreListState {
      stores : IStoreItemResponseModel[];
      isStoreLoading:boolean;
  }
export default (state: StoreListState = intialState, action: Action) => {
    switch (action.type) {
        case GETDATA:
            return {
                ...state,
                stores:action.payload
            };
            case STORE_LOADING:
                return {
                    isStoreLoading:false,
                    stores:action.payload
                }
        default:
            return state;
    }
};
