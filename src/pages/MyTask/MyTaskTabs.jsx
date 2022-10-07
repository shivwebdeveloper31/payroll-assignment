import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { withStyles } from '@material-ui/core';
import { ColorRing } from 'react-loader-spinner'
import Table from '@mui/material/Table';
import { toast } from 'react-toastify';
import moment from 'moment/moment';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import {
    FaThumbsUp,
    FaTrashAlt,
    FaJoget,
    FaHandPointUp,
    FaRegCheckCircle
} from "react-icons/fa";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UpdateMyTaskAction } from '../../components/redux/action/MyTaskAction';
import { useDispatch, useSelector } from 'react-redux';
import PartialCompleteModal from './PartialCompleteModal';

const token = localStorage.getItem("token");
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ responseData, query, UpdateMyTask, CompleteMyTask }) {
    // console.log('dddddddddddddelete', DeleteMyTask)
    // const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(30);
    const [partial, SetPartial] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("jjjjjjjjjjjjjjjjjj", partial);

    // useEffect(() => {
    //     dispatch(UpdateMyTaskAction());
    // }, []);

    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Basic ${token}`
    }

    const DeleteMyTask = (taskId) => {

        fetch(`/Task/DeleteTask?taskId=${taskId}`, {
            method: 'GET', headers
        }).then((result) => {
            console.log('Delete', result)
            toast.success("Task Delete Successfully");
        })

    };

    const PartialComplete = () => {

        fetch(`/Task/UserTaskStatusMaster`, {
            method: 'GET', headers
        }).then((response) => response.json())
            .then((Partialdata) => {
                SetPartial(Partialdata)
            });

    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value), 10)
        setPage(0)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const StyleTableCell = withStyles({
        head: {
            fontWeight: 600,
            padding: 5
        },
        body: {
            padding: 5,
            whiteSpace: 'nowrap'
        }
    })(TableCell);



    return (
        <>
            <ToastContainer autoClose={2000} />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="MY Task" {...a11yProps(0)} />
                        <Tab label="CC" {...a11yProps(1)} />
                        <Tab label="Assigned By me" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Table>
                        <TableRow>
                            <StyleTableCell>Title</StyleTableCell>
                            <StyleTableCell>Customer Name</StyleTableCell>
                            <StyleTableCell>Assigned By</StyleTableCell>
                            <StyleTableCell>Assigned Date</StyleTableCell>
                            <StyleTableCell>Due Date</StyleTableCell>
                            <StyleTableCell>Priority</StyleTableCell>
                            <StyleTableCell>Status</StyleTableCell>
                            <StyleTableCell></StyleTableCell>
                            <StyleTableCell></StyleTableCell>
                            <StyleTableCell><center>Action</center></StyleTableCell>
                            <StyleTableCell></StyleTableCell>
                            <StyleTableCell></StyleTableCell>
                        </TableRow>
                        {responseData?.data?.TaskList ? responseData?.data?.TaskList?.filter((data) => {
                            if (query === "") {

                                return data;

                            } else if (data.Title.toLowerCase().includes(query.toLowerCase())) {
                                return data;
                            }
                        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((data, index) =>
                            (<>
                                <TableRow>
                                    <StyleTableCell>{data.Title}</StyleTableCell>
                                    <StyleTableCell>{data.LeadName}</StyleTableCell>
                                    <StyleTableCell>{data.AssignedByUserName}</StyleTableCell>
                                    <StyleTableCell>{moment(data.CreateDate).format("Do MMM YY")}</StyleTableCell>
                                    <StyleTableCell>{moment(data.TaskEndDate).format("Do MMM YY")}</StyleTableCell>
                                    <StyleTableCell>{data.Priority}</StyleTableCell>
                                    <StyleTableCell>{data.TaskStatus === 0 ? "Accepted" : "Not Accepted" && data.TaskStatus === 100 ? "Completed" : 'Not Accepted'}</StyleTableCell>
                                    <StyleTableCell></StyleTableCell>
                                    <StyleTableCell style={{ color: 'blue', fontSize: '20px' }}><center>{data.TaskStatus === 0 ? '' : <FaThumbsUp onClick={(e) => UpdateMyTask(data.TaskId)} /> && data.TaskStatus === 100 ? " " : <FaThumbsUp onClick={(e) => UpdateMyTask(data.TaskId)} />}</center></StyleTableCell>
                                    <StyleTableCell style={{ color: 'red', fontSize: '20px' }}><center><FaTrashAlt onClick={(e) => DeleteMyTask(data.TaskId)}>{data.TaskId}</FaTrashAlt></center></StyleTableCell>
                                    <StyleTableCell style={{ color: 'purple', fontSize: '20px' }}><center>{data.TaskStatus === 0 ? <FaRegCheckCircle onClick={(e) => CompleteMyTask(data.TaskId)} /> : ''}</center></StyleTableCell>
                                    <StyleTableCell style={{ color: 'green', fontSize: '20px' }} ><center>
                                        <FaJoget onClick={handleOpen} />
                                    </center></StyleTableCell>
                                </TableRow>
                                <div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Partial Complete
                                            </Typography>
                                            <Divider />
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                                {partial?.data.map((item) => {
                                                    <div>
                                                        <h1>hahahshshhs{item.Id}</h1>
                                                        <h1>{item.Id}</h1>
                                                        <h1>{item.Value}</h1>
                                                    </div>

                                                })}
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            </>
                            )) : <div>
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>}
                    </Table>
                    <Box>
                        <TablePagination
                            rowsPerPageOptions={[10, 15]}
                            component="div"
                            count={responseData?.data?.TaskList?.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>

        </>
    );
}
