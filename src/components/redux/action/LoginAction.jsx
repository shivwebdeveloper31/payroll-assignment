import { LoginAuth, LoginAuthFail, Logout } from '../ConstantType';
import authServices from '../apiServices/LoginServices';
import { toast } from 'react-toastify';


// 1.Login


export const LoginAdmin = (data, navigate) => {
    console.log('data :>> ', data);
    return dispatch => {
        authServices.LoginAuth(data)
            .then(res => {
                dispatch(LoginAuthData(res.data));
                console.log(res.data, "fsyhxvy")
                let token = "Basic " + btoa(data.Username + ":" + data.Password);
                console.log("sssssssssssss", data)
                localStorage.setItem("token", token)
                navigate('/dashboard')
                toast.success("Logged In Success");
            })
            .catch(error => {
                dispatch(onLoginAuthFail(error.data));
                toast.error("Logged In Failed");
            });
    };
};

export const LoginAuthData = data => {
    console.log("actaaaaaaaa", data)
    return {
        type: LoginAuth,
        payload: data,
    };
};

export const onLoginAuthFail = error => {
    return {
        type: LoginAuthFail,
        payload: error,
    };
};


export const logoutAction = () => {
    return {
        type: Logout
    }
}
