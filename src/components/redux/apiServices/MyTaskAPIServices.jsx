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

export const UpdateApiMyTask = (taskId) => {
    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Basic ${token}`
    }
    return MyTaskRequest(`/Task/UpdateTaskStatus`, 'POST', headers, { "TaskId": taskId, "TaskStatusValue": 0 });
}

export const CompleteApiMyTask = (taskId) => {
    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Basic ${token}`
    }
    return MyTaskRequest(`/Task/UpdateTaskStatus`, 'POST', headers, { "TaskId": taskId, "TaskStatusValue": 100 });
}


export default MyTaskRequest;