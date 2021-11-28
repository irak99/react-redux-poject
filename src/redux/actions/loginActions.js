import { ActionTypes } from "../contants/action-types";

export const setLogin = (props) =>{
    return {
        type: ActionTypes.LOGIN,
        payload: props,
      };
}