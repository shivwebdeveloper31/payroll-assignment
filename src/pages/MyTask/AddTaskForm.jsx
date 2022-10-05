// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import React from 'react';
// import DialogActions from '@mui/material/DialogActions';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import '../../components/commonCssFile/commonfile.css';
// import { Button } from '@mui/material';



// const AddTaskForm = ({ handleClose }) => {
//     const [value, setValue] = React.useState(null);


//     const validationSchema = yup.object({
//         Title: yup
//             .string('Only letter are Allowed')
//             .required('Title is required'),
//         Description: yup
//             .string('Only letter are Allowed')
//             .required('Description is required'),
//         AddUser: yup
//             .string('only letter are Allowed')
//             .required('Add User is required'),
//     });

//     const formik = useFormik({
//         initialValues: {
//             Title: '',
//             Description: '',
//             CustomerName: '',
//             AddUser: '',

//         },
//         validationSchema: validationSchema,

//         onSubmit: (values) => {
//             if (values) {
//                 // dispatch(LoginAdmin(values, navigate));

//             }
//         },

//     });

//     return (
//         <>
//             <form onSubmit={formik.handleSubmit}>
//                 <div className='main_Form'>
//                     <TextField
//                         fullWidth
//                         size='small'
//                         id="Title"
//                         name="Title"
//                         label="Title"
//                         variant="standard"
//                         value={formik.values.Title}
//                         onChange={formik.handleChange}
//                         error={formik.touched.Title && Boolean(formik.errors.Title)}
//                         helperText={formik.touched.Title && formik.errors.Title}
//                     />
//                     <TextField
//                         fullWidth
//                         size='small'
//                         id="Description"
//                         name="Description"
//                         label="Description"
//                         variant="standard"
//                         className='input_type'
//                         value={formik.values.Description}
//                         onChange={formik.handleChange}
//                         error={formik.touched.Description && Boolean(formik.errors.Description)}
//                         helperText={formik.touched.Description && formik.errors.Description}
//                     />
//                     <div className='Upload_input_label'>
//                         <label for="myfile" >Attach File</label>
//                         <input type="file" id="myfile" name="myfile" className='Upload_input'></input>
//                     </div><FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
//                             <InputLabel id="demo-simple-select-filled-label">Customer Name</InputLabel>
//                             <Select
//                                 labelId="demo-simple-select-filled-label"
//                                 id="demo-simple-select-filled"
//                                 variant="standard"
//                                 fullWidth
//                                 value={formik.values.CustomerName}
//                                 onChange={formik.handleChange}

//                             // value={age}
//                             // onChange={handleChange}
//                             >
//                                 <MenuItem value={10}>Ten</MenuItem>
//                                 <MenuItem value={20}>Twenty</MenuItem>
//                                 <MenuItem value={30}>Thirty</MenuItem>
//                             </Select>
//                         </FormControl>
//                     <hr />
//                     <Box>
//                         
//                         <FormControl style={{ marginLeft: "8px" }} sx={{ minWidth: 250 }} className='input_type'>
//                             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                 <DatePicker
//                                     label="Select Date"
//                                     disablePast
//                                     value={value}
//                                     onChange={(newValue) => {
//                                         setValue(newValue);
//                                     }}
//                                     // value={value}
//                                     // onChange={(newValue) => {
//                                     //     setValue(newValue);
//                                     // }}
//                                     renderInput={(params) => <TextField variant="standard" {...params} />}
//                                 />
//                             </LocalizationProvider>
//                         </FormControl>
//                     </Box>
//                     <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
//                         <InputLabel id="demo-simple-select-filled-label">Select Priority</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-filled-label"
//                             id="demo-simple-select-filled"
//                             variant="standard"
//                             fullWidth
//                         // value={age}
//                         // onChange={handleChange}
//                         >
//                             <MenuItem value={10}>High Priority</MenuItem>
//                             <MenuItem value={20}>Low Priority</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <TextField
//                         fullWidth
//                         size='small'
//                         id="AddUser"
//                         name="AddUser"
//                         label="Add User"
//                         variant="standard"
//                         className='input_type'
//                         value={formik.values.AddUser}
//                         onChange={formik.handleChange}
//                         error={formik.touched.AddUser && Boolean(formik.errors.AddUser)}
//                         helperText={formik.touched.AddUser && formik.errors.AddUser}
//                     />
//                     <TextField
//                         fullWidth
//                         size='small'
//                         id="AddMember"
//                         name="AddMember"
//                         label="Add CC Member"
//                         variant="standard"
//                         className='input_type'
//                     // error={formik.touched.AddUser && Boolean(formik.errors.AddUser)}
//                     // helperText={formik.touched.AddUser && formik.errors.AddUser}
//                     />
//                 </div>
//                 <DialogActions dividers className='input_type'>
//                     <Button variant='contained' size='small' color="success" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                     <Button type='submit' variant='contained' size='small'>
//                         Add
//                     </Button>
//                 </DialogActions>
//             </form>
//         </>
//     )
// }
// export default AddTaskForm;


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

const courseCategory = [
    {
        value: "webDevelopment",
        label: "Web Development"
    },
    {
        value: "networking",
        label: "Networking"
    },
    {
        value: "computerScience",
        label: "Computer Science"
    }
];

const AddTaskForm = props => {
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
                        <label for="myfile" >Attach File</label>
                        <input type="file" id="myfile" name="myfile" className='Upload_input'></input>
                    </div>
                    <hr />
                    <div>
                        <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
                            <InputLabel id="demo-simple-select-filled-label">Customer Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                variant="standard"
                                fullWidth
                            // value={formik.values.CustomerName}
                            // onChange={formik.handleChange}

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
                                    disablePast
                                    // value={value}
                                    // onChange={(newValue) => {
                                    //     setValue(newValue);
                                    // }}
                                    renderInput={(params) => <TextField variant="standard" {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </div>
                    <FormControl variant="standard" sx={{ minWidth: 250 }} className='input_type'>
                        <InputLabel id="demo-simple-select-filled-label">Select Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            variant="standard"
                            fullWidth
                        //   value={age}
                        //   onChange={handleChange}
                        >
                            <MenuItem value={10}>High Priority</MenuItem>
                            <MenuItem value={20}>Low Priority</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <FormControl variant="standard" sx={{ minWidth: 500 }} className='input_type'>
                            <InputLabel id="demo-simple-select-filled-label">Add User</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                variant="standard"
                                fullWidth
                            //   value={age}
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>High Priority</MenuItem>
                                <MenuItem value={20}>Low Priority</MenuItem>
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
                            //   value={age}
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>High Priority</MenuItem>
                                <MenuItem value={20}>Low Priority</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </CardContent>
                <DialogActions>
                    <Button variant='contained' size='small'>
                        Cancel
                    </Button>
                    <Button type='submit' variant='contained' size='small'>
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
        name,
        surname,
        email,
        course,
        password,
        confirmPassword
    }) => {
        return {
            Title: Title || "",
            name: name || "",
            surname: surname || "",
            email: email || "",
            course: course || "",
            password: password || "",
            confirmPassword: confirmPassword || ""
        };
    },

    validationSchema: yup.object().shape(validationsForm),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            //submit to the server
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(AddTaskForm);

export default withStyles(styles)(Form);

