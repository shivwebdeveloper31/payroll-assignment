// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { withStyles } from '@material-ui/core';
// import { ColorRing } from 'react-loader-spinner'
// import Table from '@mui/material/Table';
// import moment from 'moment/moment';
// import TextField from '@mui/material/TextField';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import { MyTaskAction } from '../../components/redux/action/MyTaskAction';
// import { useSelector, useDispatch } from 'react-redux';


// export default function MyTaskTable() {

//     const dispatch = useDispatch();
//     const responseData = useSelector(state => state?.mytask?.user);

//     useEffect(() => {
//         dispatch(MyTaskAction());
//     }, []);

//     const StyleTableCell = withStyles({
//         head: {
//             fontWeight: 600,
//             padding: 5
//         },
//         body: {
//             padding: 5,
//             whiteSpace: 'nowrap'
//         }
//     })(TableCell);
//     return (
//         <>
//             <Table>
//                 <TableRow>
//                     <StyleTableCell>Title</StyleTableCell>
//                     <StyleTableCell>Customer Name</StyleTableCell>
//                     <StyleTableCell>Assigned By</StyleTableCell>
//                     <StyleTableCell>Assigned Date</StyleTableCell>
//                     <StyleTableCell>Due Date</StyleTableCell>
//                     <StyleTableCell>Priority</StyleTableCell>
//                     <StyleTableCell>Status</StyleTableCell>
//                     <StyleTableCell></StyleTableCell>
//                 </TableRow>
//                 {responseData?.data?.TaskList ? responseData?.data?.TaskList?.filter((data) => {
//                     data.Title.toLowerCase().includes(query)
//                 }
//                 ).map((data) =>
//                 (<TableRow>
//                     <StyleTableCell>{data.Title}</StyleTableCell>
//                     <StyleTableCell>{data.LeadName}</StyleTableCell>
//                     <StyleTableCell>{data.AssignedByUserName}</StyleTableCell>
//                     <StyleTableCell>{moment(data.CreateDate).format("MMM Do YY")}</StyleTableCell>
//                     <StyleTableCell>{moment(data.TaskEndDate).format("MMM Do YY")}</StyleTableCell>
//                     <StyleTableCell>{data.Priority}</StyleTableCell>
//                     <StyleTableCell style={{ color: 'red' }}>Not Accepted</StyleTableCell>
//                     <StyleTableCell></StyleTableCell>
//                 </TableRow>
//                 )) : <div>
//                     <ColorRing
//                         visible={true}
//                         height="80"
//                         width="80"
//                         ariaLabel="blocks-loading"
//                         wrapperStyle={{}}
//                         wrapperClass="blocks-wrapper"
//                         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//                     />
//                 </div>}
//             </Table>

//         </>


//     );
// }

