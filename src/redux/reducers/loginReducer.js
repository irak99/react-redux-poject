import { ActionTypes } from "../contants/action-types";

export const loginRedcuer = ({type,payload})=>{
    switch (type) {
        case ActionTypes.LOGIN:
            return {payload}
    
        default:
            break;
    }
}