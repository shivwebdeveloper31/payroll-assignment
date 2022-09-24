import { LoginAuth } from "../ConstantType";

const initialState = {
    user: {},
    isLoggedIn: false,
}


export const authReducer = (state = initialState, action) => {
    console.log("hhhhhhhhhhh", action)
    switch (action.type) {
        case LoginAuth: {
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("userId", action.payload.userDetail.data.UserId);

            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}