import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                auth: true
            }
        case types.logout:
            return { auth: false }
        default:
            return state;
    }

}