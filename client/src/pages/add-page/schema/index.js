import * as Yup from 'yup';
 
export const AddSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, Fill the section !!!'),
    catacory: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, Fill the section !!!'),
    description: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, Fill the section !!!'),
    // price: Yup.number()
    // .min(2, 'Too Short!')
    // .max(500000, 'Too Long!')
    // .required('Please, Fill the section !!!'),
    img: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, Fill the section !!!'),
  

    
});