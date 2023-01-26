import React from 'react'
import './index.scss'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { AddSchema } from './schema';

const AddPage = () => {

  return (

    <div className='form'>
     <h1>ADD YOUR PERSONAL INFORMATION</h1>
     <Formik
       initialValues={{
        name:'',
        catacory:'',
        description:'',
        price:'',
        img:'',
       }}
       validationSchema={AddSchema}
       onSubmit={(values,{resetForm}) => {
       axios.post('http://localhost:8000/schools',values)
       resetForm()
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name" placeholder='Enter your name.' className='input'/>
           {errors.name && touched.name ? (
             <div className='err'>{errors.name}</div>
           ) : null}<br/><br />

           <Field name="catacory" placeholder='Enter your catacory.'className='input'/>
           {errors.catacory && touched.catacory ? (
             <div className='err'>{errors.catacory}</div>
           ) : null}<br/><br />

           <Field name="description" placeholder='Enter your description.' className='input'/>
           {errors.description && touched.description ? (
             <div className='err'>{errors.description}</div>
           ) : null}<br/><br />

           {/* <Field name="price" placeholder='Enter your price.' className='input'/>
           {errors.price && touched.price ? (
             <div className='err'>{errors.price}</div>
           ) : null}<br/><br /> */}

           <Field name="img" placeholder='Enter your image (Just link!!!).' className='input'/>
           {errors.img && touched.img ? (
             <div className='err'>{errors.img}</div>
           ) : null}<br/><br />
        
          
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default AddPage