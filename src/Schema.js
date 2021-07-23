import * as yup from 'yup'

const formSchema=yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),
    
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large']),
    
    sauce:yup
    .string()
    .oneOf(['original red', 'Garlic Ranch', 'bbq sauce', 'spinach alfredo'], 'Required'),
    
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian: yup.boolean(),
    spicyItalian: yup.boolean(),
    garlic: yup.boolean(),

    special: yup
    .string()
    .trim()
    .min(5, 'minimum of 5 charcters')
})
export default formSchema