// import axios from 'axios';

// const Data = { "From": 1, "To": 15, "Title": "", "UserId": 1124, "IsArchive": false, "UserIds": [], "Priority": "", "TaskStatus": "", "FromDueDate": "", "ToDueDate": "", "SortByDueDate": "" }
// function MyTaskServices(Data) {

//     const headers = {
//         "Content-Type": "application/json",
//         'Authorization': `Basic ${localStorage.getItem("token")
//             }`
//     }


//     //1. Login Auth
//     this.MyTaskAPI = async Data => await axios.post(`/Task/UserTasksAssignedToMe`, headers, Data);

// }

// export default new MyTaskServices();

import axios from "axios";

const token = localStorage.getItem("token");

export async function MyTaskRequest(url, method, headers, params) {
    return params ? axios({
        url: url,
        method: method,
        headers: headers,
        Authorization: `Basic ${token}`,
        data: params,
        timeout: 20000,
    })
        : axios({
            url: url,
            method: method,
            headers: headers,
            Authorization: `Basic ${token}`,
            data: {},
            timeout: 20000,
        })
}
//  Data Get
export const GetApiMyTask = () => {
    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Basic ${token}`
    }
    return MyTaskRequest('/Task/UserTasksAssignedToMe', 'POST', headers, { "From": 1, "To": 28, "Title": "", "UserId": 1124, "IsArchive": false, "UserIds": [], "Priority": "", "TaskStatus": "", "FromDueDate": "", "ToDueDate": "", "SortByDueDate": "" });
};

export default MyTaskRequest;