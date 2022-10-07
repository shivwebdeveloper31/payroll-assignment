import React from "react";
import {
    withStyles,
    Card,
    CardContent,
    CardActions,
    TextField,
    MenuItem,
} from "@material-ui/core";
import validationsForm from './validationSchema';
import DialogActions from '@mui/material/DialogActions';
import { withFormik } from "formik";
import * as yup from "yup";
import { Add } from "@mui/icons-material";
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect } from "react";
import { LeadMyTaskAction } from '../../components/redux/action/MyTaskAction';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
const token = localStorage.getItem("token");

const styles = () => ({
    card: {
        maxWidth: 420,
        marginTop: 50
    },
    container: {
        display: "Flex",
        justifyContent: "center"
    },
    actions: {
        float: "right"
    }
});

const AddTaskForm = (props, { handleClose }) => {
    // console.log('handleclose', handleClose);
    const [date, setDate] = React.useState(null);
    const [udata, setUdata] = useState();

    const dispatch = useDispatch();
    const responseData = useSelector(state => state?.mytask?.user);


    useEffect(() => {
        dispatch(LeadMyTaskAction());
    }, []);

    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Basic ${token}`
    }

    const Userdata = () => {

        fetch(`/CompanyMembers?from=1&text=&to=100`, {
            method: 'GET', headers
        }).then((response) => response.json())
            .then((Udata) =>
                setUdata(Udata));

    };

    useEffect(() => {
        Userdata();
    }, [])

    const handleChangeDate = (date) => {
        setDate(date)
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <TextField
                        id="Title"
                        label="Title"
                        value={values.Title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.Title ? errors.Title : ""}
                        error={touched.Title && Boolean(errors.Title)}
                        margin="dense"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        id="Description"
                        label="Description"
                        value={values.Description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.Description ? errors.Description : ""}
                        error={touched.Description && Boolean(errors.Description)}
                        margin="dense"
                        variant="standard"
                        fullWidth
                    />
                    <div className='Upload_input_label'>
                        <label for="Image" >Attach File</label>
                        <input type="file" value={values.Upload} onChange={handleChange} id="Image" name="Image" className='Upload_input' />
                    </div>
                    <hr />
                    <div>
                        <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
                            <InputLabel id="customername">Customer Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="customer"
                                variant="standard"
                                name="customer"
                                fullWidth
                                value={values.customer}
                                onChange={handleChange}
                            >
                                {responseData?.data?.data?.Leads.map((item) => (
                                    <MenuItem value={item.LeadName}>{item.LeadName}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl style={{ marginLeft: "8px" }} sx={{ minWidth: 250 }} className='input_type'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select Date"
                                    disablePast
                                    name="date"
                                    value={date}
                                    // onChange={(newValue) => {
                                    //     setDate(newValue);
                                    // }}
                                    onChange={handleChangeDate}
                                    renderInput={(params) => <TextField variant="standard" {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </div>
                    <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
                        <InputLabel id="demo-simple-select-filled-label">Select Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="Priority"
                            name="Priority"
                            variant="standard"
                            fullWidth
                            value={values.Priority}
                            onChange={handleChange}
                        >
                            <MenuItem value='High'>High Priority</MenuItem>
                            <MenuItem value='Low'>Low Priority</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <FormControl variant="standard" sx={{ minWidth: 500 }} className='input_type'>
                            <InputLabel id="demo-simple-select-filled-label">Add User</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="User"
                                variant="standard"
                                fullWidth
                                name="User"
                                value={values.User}
                                onChange={handleChange}
                            >
                                {
                                    udata?.data?.Members?.map((items) => (
                                        <MenuItem value={items.Name}>{items.Name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{ minWidth: 500 }} className='input_type'>
                            <InputLabel id="demo-simple-select-filled-label">Add Member</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                variant="standard"
                                fullWidth
                                name="Member"
                                value={values.Member}
                                onChange={handleChange}
                            >
                                {
                                    udata?.data?.Members?.map((items) => (
                                        <MenuItem value={items.Name}>{items.Name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </CardContent>
                <DialogActions>
                    <Button onClose={handleClose} variant='contained' size='small'>
                        Cancel
                    </Button>
                    <Button type='submit' variant='contained' size='small' disabled={isSubmitting}>
                        Add
                    </Button>
                </DialogActions>
            </form>
        </div>
    );
};

const Form = withFormik({
    mapPropsToValues: ({
        Title,
        Description,
    }) => {
        return {
            Title: Title || "",
            Description: Description || "",

        };
    },


    validationSchema: yup.object().shape(validationsForm),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(AddTaskForm);

export default withStyles(styles)(Form);

// https://codesandbox.io/s/formik-material-ui-and-yup-hy0ju?file=/src/validations/validationSchema.jss