import * as yup from "yup";

const validationsForm = {
    Title: yup
        .string()
        .required("Title is required"),
    Description: yup.string().required("Description is Required"),
};

export default validationsForm;
