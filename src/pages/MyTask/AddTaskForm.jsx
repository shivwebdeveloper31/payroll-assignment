import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import '../../components/commonCssFile/commonfile.css'



const AddTaskForm = () => {



    const validationSchema = yup.object({
        Title: yup
            .string('Only letter are Allowed')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Title is required'),
        Description: yup
            .string('Only letter are Allowed')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            Title: '',
            Description: '',
            CustomerName: '',

        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            if (values) {
                // dispatch(LoginAdmin(values, navigate));

            }
        },

    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='main_Form'>
                    <TextField
                        fullWidth
                        required
                        size='small'
                        id="Title"
                        name="Title"
                        label="Title"
                        variant="standard"
                        value={formik.values.Title}
                        onChange={formik.handleChange}
                        error={formik.touched.Title && Boolean(formik.errors.Title)}
                        helperText={formik.touched.Title && formik.errors.Title}
                    />
                    <TextField
                        fullWidth
                        required
                        size='small'
                        id="Description"
                        name="Description"
                        label="Description"
                        variant="standard"
                        className='input_type'
                        value={formik.values.Description}
                        onChange={formik.handleChange}
                        error={formik.touched.Description && Boolean(formik.errors.Description)}
                        helperText={formik.touched.Description && formik.errors.Description}
                    />
                    <Box>
                        <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
                            <InputLabel id="demo-simple-select-filled-label">Customer Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                variant="standard"
                                fullWidth
                                value={formik.values.CustomerName}
                                onChange={formik.handleChange}
                                
                            // value={age}
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{ marginLeft: "8px" }} sx={{ minWidth: 250 }} className='input_type'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select Date"
                                    value={formik.values.CustomerName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.CustomerName && Boolean(formik.errors.CustomerName)}
                                    helperText={formik.touched.CustomerName && formik.errors.CustomerName}
                                    // onChange={(newValue) => {
                                    //     setValue(newValue);
                                    // }}
                                    renderInput={(params) => <TextField variant="standard" {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </Box>
                    <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
                        <InputLabel id="demo-simple-select-filled-label">Select Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            variant="standard"
                            fullWidth
                        // value={age}
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>High Priority</MenuItem>
                            <MenuItem value={20}>Low Priority</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        required
                        size='small'
                        id="AddUser"
                        name="AddUser"
                        label="Add User"
                        variant="standard"
                        className='input_type'
                        value={formik.values.AddUser}
                        onChange={formik.handleChange}
                        error={formik.touched.AddUser && Boolean(formik.errors.AddUser)}
                        helperText={formik.touched.AddUser && formik.errors.AddUser}
                    />
                    <TextField
                        fullWidth
                        size='small'
                        id="AddMember"
                        name="AddMember"
                        label="Add CC Member"
                        variant="standard"
                        className='input_type'
                        value={formik.values.Password}
                        onChange={formik.handleChange}
                    />
                </div>
            </form>
        </>
    )
}
export default AddTaskForm;

