import * as yup from 'yup';

const schema = yup.object().shape({
    nameOfCust: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters long"),
    size: yup
    .string()
    .oneOf(['XS', 'S', 'M', 'L', 'XL'], "choice of size is required"),
    sauce: yup
    .string()
    .required("choice of sauce is required"),
})

export default schema