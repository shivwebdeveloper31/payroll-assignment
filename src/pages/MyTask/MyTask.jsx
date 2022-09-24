import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../../components/commonCssFile/PaperCommon.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import BasicTabs from './MyTaskTabs';
import AddTaskModal from './AddTaskModal';
import { MyTaskAction } from '../../components/redux/action/MyTaskAction';
import { useSelector, useDispatch } from 'react-redux';


const MyTask = () => {
    const [query, Setquery] = useState("")

    const dispatch = useDispatch();
    const responseData = useSelector(state => state?.mytask?.user);

    useEffect(() => {
        dispatch(MyTaskAction());
    }, []);

    // const Search = (responseData) => {
    //     return responseData?.data?.TaskList?.filter((item) => {
    //         item.Title.toLowerCase().includes(query)
    //     })
    // }

    return (
        <div>
            <Box className='MyTask_Box'>
                <Paper className='Paper'>
                    <Box className='Top_MyTask'>
                        <Grid>
                            <Button variant="contained" size='small'>Filter</Button>
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
                        <BasicTabs responseData={responseData} query={query} />
                    </Box>
                </Paper>
            </Box>
        </div>
    );
};

export default MyTask;