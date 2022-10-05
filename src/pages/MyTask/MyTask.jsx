import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../../components/commonCssFile/PaperCommon.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import BasicTabs from './MyTaskTabs';
import AddTaskModal from './AddTaskModal';
import { MyTaskAction, UpdateMyTaskAction, CompleteMyTaskAction } from '../../components/redux/action/MyTaskAction';
import { useSelector, useDispatch } from 'react-redux';
import FilterModal from './FilterModal';



const MyTask = () => {
    const [query, Setquery] = useState("")

    const dispatch = useDispatch();
    const responseData = useSelector(state => state?.mytask?.user);

    useEffect(() => {
        dispatch(MyTaskAction());
    }, []);

    const UpdateMyTask = (taskId) => {
        dispatch(UpdateMyTaskAction(taskId));

    };

    const CompleteMyTask = (taskId) => {
        dispatch(CompleteMyTaskAction(taskId));

    };

    return (
        <div>
            <Box className='MyTask_Box'>
                <Paper className='Paper'>
                    <Box className='Top_MyTask'>
                        <Grid>
                            <Box><FilterModal responseData={responseData} /></Box>
                        </Grid>
                        <Box className='Left_side'>
                            <TextField id="standard-basic" label="Search" variant="standard" onChange={(e) => Setquery(e.target.value)} />
                            <Box className='All_btn'>
                                <Box><AddTaskModal /></Box>
                                <Box><Button variant="contained" size='small'>Setting</Button></Box>
                                <Box><Button variant="contained" size='small'>Export</Button></Box>
                            </Box>
                        </Box>
                    </Box><hr />
                    <Box>
                        <BasicTabs responseData={responseData} query={query} UpdateMyTask={UpdateMyTask} CompleteMyTask={CompleteMyTask} />
                    </Box>
                </Paper>
            </Box>
        </div>
    );
};

export default MyTask;