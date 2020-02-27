import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withFormik, Form, Field} from 'formik';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import './Form.css';

const UserForm=({values,errors,isSubmitting, newMember, data, setData,setNewMember, Newmember, addnewmember, status})=>{
    
   

    useEffect(()=>
       status && setData(status)
    , [status]);
    
   
    
    useEffect(()=>

     addnewmember(data)
   ,[data])

  // 


    return(
      <Form> 
        <h1>Become our member today</h1>
       
       
       <label>
        Name:
       <Field type='text' name='Name' placeholder='Name' />
       
       
       </label>
       {errors.Name && <p style={{ marginLeft: '7rem', color : 'red'}}>{errors.Name}</p>}
       <label>
        Password:
       <Field type='password' name='Password' placeholder='Password' />
       </label>
       {errors.Password && <p style={{ marginLeft: '7rem', color: 'red'}}>{errors.Password}</p>}
       <label>
        email:
       <Field type='text' name='email' placeholder='Email' />
       </label>
       {errors.email && <p style={{ marginLeft: '7rem', color: 'red'}}>{errors.email}</p>}
       <label>
        I agree to the TOS
       <Field type='checkbox' className='checkbox' checked={values.TOS} name='TOS' placeholder='TOS' />
    
       </label>
       {errors.TOS && <p style={{marginLeft: '7rem', color: 'red'}}> {errors.TOS}</p>}
       <Button type='submit' className='big-button' disabled={isSubmitting} color='primary'> Sign Up </Button>
       <Button type='button' className='small-button'  ><Link to='/memberlist'> See list of user </Link> </Button>

      </Form>
    );
}

export default withFormik(
  
  {
  mapPropsToValues({Name,Password,Email,TOS}){
      return{
          Name: '',
          Password: '',
          email: '', 
          TOS: true
     
    };
    
  },

  validationSchema: Yup.object().shape({
    Name: Yup
    .string()
    .required('This is a required field'),
    Password: Yup
    .string()
    .required(),
    
    email: Yup
    .string()
    .email('Email is not valid'),
    TOS: Yup.boolean().oneOf([true], " You Must Accept Terms of Service"),
    
    
    
    
  }),
  
  handleSubmit(values, {resetForm, setErrors, setSubmitting, setStatus}){
  
    if(values.email === 'jacktran1799@gmail.com'){
      setErrors({email: 'please choose a different email'});

    } else{
    axios
    .post('https://reqres.in/api/users/',values)
    .then(res=> {
      console.log(res);
      setStatus(res.data);
     
      resetForm(console.log('Form is reset')); })
    .catch(error=>  {
      console.log(error);
      setSubmitting(false);})
  }
}
})(UserForm); 