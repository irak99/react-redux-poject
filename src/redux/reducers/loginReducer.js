import { ActionTypes } from "../contants/action-types";

const initialState = {
    login: {},
  };
export const loginReducer = (state = {},{type,payload})=>{
    switch (type) {
        case ActionTypes.LOGIN:
            console.log('login reducer',payload);
            return {...payload}
    
        default:
            return state;
    }
}

