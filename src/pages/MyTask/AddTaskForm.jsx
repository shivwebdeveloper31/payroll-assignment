import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import React from 'react';
import Grid from '@mui/material/Grid';
import '../../components/commonCssFile/commonfile.css'
import DatePicker from '../../components/commonComponents/DatePicker'


const AddTaskForm = () => {



    const validationSchema = yup.object({
        Title: yup
            .string('Only letter are Allowed')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Title is required'),
        Password: yup
            .string('Only letter are Allowed')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            Title: '',
            Password: '',
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
                        value={formik.values.Password}
                        onChange={formik.handleChange}
                        error={formik.touched.Password && Boolean(formik.errors.Password)}
                        helperText={formik.touched.Password && formik.errors.Password}
                    />
                    <Box>
                        <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
                            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                variant="standard"
                                fullWidth
                            // value={age}
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{ marginLeft: "8px" }} sx={{ minWidth: 250 }} className='input_type'>
                            <DatePicker />
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
                        value={formik.values.Password}
                        onChange={formik.handleChange}
                        error={formik.touched.Password && Boolean(formik.errors.Password)}
                        helperText={formik.touched.Password && formik.errors.Password}
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
                        error={formik.touched.Password && Boolean(formik.errors.Password)}
                        helperText={formik.touched.Password && formik.errors.Password}
                    />
                </div>
            </form>
        </>
    )
}
export default AddTaskForm;

