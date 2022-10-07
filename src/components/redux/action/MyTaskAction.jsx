import { MyTask, UpdateMyTask, CompleteMyTask, LeadMyTask } from '../ConstantType';
import { GetApiMyTask, UpdateApiMyTask, CompleteApiMyTask, LeadApiMyTask } from '../apiServices/MyTaskAPIServices';
import { toast } from 'react-toastify';



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



export const UpdateMyTaskAction = (request) => {
    return function (dispatch) {
        return UpdateApiMyTask(request).then((res) => {
            console.log('Update data', res)
            dispatch({
                type: UpdateMyTask,
                payload: res,
            })
        })
    }
}

export const CompleteMyTaskAction = (request) => {
    return function (dispatch) {
        return CompleteApiMyTask(request).then((res) => {
            console.log('complete data', res)
            dispatch({
                type: CompleteMyTask,
                payload: res,
            })
        })
    }
}

export const LeadMyTaskAction = (request) => {
    return function (dispatch) {
        return LeadApiMyTask(request).then((res) => {
            console.log('complete data', res)
            dispatch({
                type: LeadMyTask,
                payload: res,
            })
        })
    }
}

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

