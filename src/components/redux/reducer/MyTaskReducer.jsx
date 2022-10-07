import { MyTask, UpdateMyTask, CompleteMyTask, LeadMyTask } from "../ConstantType";

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
        case UpdateMyTask: {
            return {
                user: action.payload,
            }
        }
        case CompleteMyTask: {
            return {
                user: action.payload,
            }
        }
        case LeadMyTask: {
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