import { MyTask } from '../ConstantType';
import { GetApiMyTask } from '../apiServices/MyTaskAPIServices';
import { toast } from 'react-toastify';


// 1.Login
export const MyTaskAction = () => {

    return function (dispatch) {
        return GetApiMyTask().then((res) => {
            console.log("Responese Dataiiiiiii : ", res);
            dispatch({
                type: MyTask,
                payload: res.data,

            });
        });
    };
};

// export const MyTaskAction = (data, navigate) => {
//     return dispatch => {

//         MyTaskServices.MyTaskAPI(data)
//             .then(res => {
//                 dispatch(MyTaskData(res));
//                 console.log(res)

//             })
//     };
// };

// export const MyTaskData = data => {
//     return {
//         type: MyTask,
//         payload: data,

//     };
// };

