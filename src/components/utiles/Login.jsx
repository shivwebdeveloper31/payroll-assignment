import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './Login.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginAdmin } from '../redux/action/LoginAction';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const validationSchema = yup.object({
        Username: yup
            .number('Enter your Mobile Number')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Mobile is required'),
        Password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: '',
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            if (values) {
                dispatch(LoginAdmin(values, navigate));

            }
        },

    });

    return (
        <div>
            <ToastContainer autoClose={2000} />
            <Grid container spacing={2} className="Main_box">
                <Grid item xs={12} md={6} lg={6} className="Left_box">
                    left
                </Grid>
                <Grid item xs={12} md={6} lg={6} className="Right_box">
                    <h3>Get Started with BETA Field Force</h3>
                    <form onSubmit={formik.handleSubmit} className='Form'>
                        <Grid p={1}>
                            <TextField
                                fullWidth
                                id="Username"
                                name="Username"
                                label="Mobile"
                                variant="standard"
                                value={formik.values.Username}
                                onChange={formik.handleChange}
                                error={formik.touched.Username && Boolean(formik.errors.Username)}
                                helperText={formik.touched.Username && formik.errors.Username}
                            />
                            {/* <p><ErrorMessage name='Username' /></p> */}
                        </Grid>
                        <Grid p={1}>
                            <TextField
                                fullWidth
                                id="Password"
                                name="Password"
                                label="Password"
                                type="password"
                                variant="standard"
                                value={formik.values.Password}
                                onChange={formik.handleChange}
                                error={formik.touched.Password && Boolean(formik.errors.Password)}
                                helperText={formik.touched.Password && formik.errors.Password}
                            />
                            {/* <p><ErrorMessage name='Password' /></p> */}
                        </Grid>
                        <Grid className='Sign_in'>
                            <Button color="primary" variant="contained" type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </form>

                </Grid>
            </Grid>

        </div>
    )
}
export default Login;



