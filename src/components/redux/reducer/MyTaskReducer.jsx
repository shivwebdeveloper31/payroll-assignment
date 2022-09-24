import { MyTask } from "../ConstantType";

const initialState = {
    user: {},
    isLoggedIn: false,
}


export const MyTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case MyTask: {
            return {
                user: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}