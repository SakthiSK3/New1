import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

import {toast} from 'react-toastify'
const Form = (props) => {
  const formik =useFormik({
     initialValues:{
     name:" ",
     email:" ",
     password:" ",
     confirmpassword:" "
 },
validationSchema:yup.object ({
    name: yup.string()
    .required( 'This Field  is required'),
   email: yup.string()
   .email('Enter vaild Password')
   .required('This Field  is required'),
   password: yup.string()
   .required('This Field  is required'),
   confirmpassword: yup.string()
   .oneOf([yup.ref("password")],"Must be same ")
   .required('This Field  is required ')
}) ,

onSubmit:(data) => {
    console.log(data);
    
       toast.success("User successful Registered")
      props.history.push('/login');

  
  }
 
});
    return(
            <div className="container mt-3">  
            <div className="jumbotron">
                <h4>Register</h4>
                <form autoComplete="off" method="post" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                    <label>Name:</label>
                     <input className="form-control"
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name} />
                      {
                           formik.errors.name ?
                          <div className="text-danger" > {formik.errors.name }
                          </div>:
                          null
                      }
                      </div>
                      <div className="form-group">
                    <label>Email:</label>
                     <input
                     className="form-control" type="text"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email} />
                      {
                           formik.errors.email ?
                          <div className="text-danger" > {formik.errors.email}
                          </div>:
                          null
                      }
                      </div>
                      <div className="form-group">
                    <label>password:</label>
                     <input
                     className="form-control" type="text"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password} />
                      {
                           formik.errors.password ?
                          <div className="text-danger" > {formik.errors.password}
                          </div>:
                          null
                      }
                      </div>
                      <div className="form-group">
                    <label>Confirm Password:</label>
                     <input
                     className="form-control" type="text"
                      name="confirmpassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmpassword} />
                      {
                           formik.errors.confirmpassword ?
                          <div className="text-danger" > {formik.errors.confirmpassword}
                          </div>:
                          null
                      }
                      </div>
                      <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" type="submit"> Submit</button>
                      <a href="#" onClick=  {()=>{
                            window.location.href='login'
                      }}>
                         <h4>login</h4>
                      </a>
                      </div>
                </form>
                </div>
            </div>
        )
    }

export default Form;
