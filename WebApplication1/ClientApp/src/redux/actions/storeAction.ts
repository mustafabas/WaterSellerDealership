import { GETDATA, STORE_LOADING } from "../types"

import { Action } from "../reducers/getStoreListReducer"
import { Dispatch } from "redux";
import axios from 'axios';
import { GET_STORES_URL } from "../constants";


export function GetData() {

  return (dispatch : Dispatch<Action>) =>  {
    dispatch(loading(true));
      axios.get(GET_STORES_URL).then((response:any)=>{
          if(response.data.isSuccess){
            var model :IStoreItemResponseModel[]= [] as IStoreItemResponseModel[];
              console.log("res",response);
            response.data.result.homeStoreItemModels.map((res:any)=>{
                model.push(
                        {
                            active:res.active,
                            address:res.address,
                            createdDate:res.createdDate,
                            phoneNumber:res.phoneNumber,
                            status:res.status,
                            storeName:res.storeName,
                            updatedDate:res.updatedDate
                        }
                )       
            });
            dispatch(storeList(model));
          }
     


      }).catch((err)=>{
          console.log("Error", err);
      });
   
  }

}

  
  export const loading = ( val:boolean) => ({
    type : STORE_LOADING,
    payload :val
  })
  export const storeList=(val:IStoreItemResponseModel[])=>({
    type : GETDATA,
    payload :val
  })