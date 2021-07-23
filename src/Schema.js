import * as yup from 'yup'

const formSchema=yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),
    sauce:yup
    .string()
    .oneOf(['original red', 'garlic ranch', 'bbq sauce', 'spinach alfredo'], 'Required'),
    topping: yup.boolean(),
    
})
export default formSchema