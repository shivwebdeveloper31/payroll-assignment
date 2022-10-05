import * as yup from "yup";

const validationsForm = {
    Description: yup.string().required("Description is Required"),
    surname: yup.string().required("Required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    course: yup.string().required("Select your course category"),
    password: yup
        .string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match")
        .required("Confirm your password"),
    Title: yup
        .string()
        .required("Title is required")
};

export default validationsForm;
