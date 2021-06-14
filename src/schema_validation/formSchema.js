import * as yup from 'yup';

const schema = yup.object().shape({
    nameOfCust: yup
    .string()
    .required()
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string()
    .oneOf(['XS', 'S', 'M', 'L', 'XL'], "choice of size is required"),
    // sauce: yup
    // .string()
    // .required("choice of sauce is required"),
    toppings1: yup
    .boolean(),
    toppings2: yup
    .boolean(),
    toppings3: yup
    .boolean(),
    toppings4: yup
    .boolean(),
    toppings5: yup
    .boolean(),
    toppings6: yup
    .boolean(),
    toppings7: yup
    .boolean(),
    toppings8: yup
    .boolean(),
    toppings9: yup
    .boolean(),
    toppings10: yup
    .boolean(),
    toppings11: yup
    .boolean(),
    toppings12: yup
    .boolean(),
    toppings13: yup
    .boolean(),
    toppings14: yup
    .boolean(),
    special: yup
    .string(),
})

export default schema