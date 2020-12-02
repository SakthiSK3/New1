import React,{useEffect,useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login_style.css';

 
const Login = () => {
    const formik =useFormik({
            initialValues:{
            
            email:" ",
            password:" ",
            
    },
        validationSchema:yup.object ({
        
        email: yup.string()
        .email()
        .required("Email is required "),
        password: yup.string()
        .required("Password is required"),
        }) ,
        
        onSubmit:(data) =>{
          toast.success("Login Successfully")
          console.log(data)
        }
      })
     
     return(
            <div className="container col-12 col-mt3">
             <div className="row justify-content-center">
              <div className="card ">
               <div className="col text-center">
                 <h3 className="font-weight-bold">Welcome Back</h3><br/>
                 <button class="btn btn-primary btn-lg btn-facebook btn-block text-uppercase" type="submit"><FontAwesomeIcon icon={['fab', 'facebook']} size="1x" color="white"/>
                  Sign in with Facebook</button>
                 <br/>
                 <h4><center>OR</center></h4><br/></div>
                  <form autoComplete="off" method="post" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                     <label>Email:</label>
                     <input name="email" className="form-control" type="text" placeholder="Email or UserName"
                      onChange={formik.handleChange}
                      value={formik.values.email}/>
                      {
                           formik.errors.email ?
                          <div className="text-danger" > {formik.errors.email}
                          </div>:
                          null
                      }
                    </div>
                      <div className="form-group">
                    <label>password:</label>
                     <input type="text" name="password" className="form-control"  placeholder="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}/>
                      {
                           formik.errors.password ?
                          <div className="text-danger" > {formik.errors.password}
                          </div>:
                          null
                      }
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                      <input type="checkbox" id="login" name="login" value="Bike"/>
                      <label for="login">Remember</label><br/>
                      </div>
                      <a href="#" >
                         <h5>Forget Password</h5>
                      </a>
                      </div>
                      <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                      <hr/>
                      <div class="form-footer">
                          <p>Don't have an account?<a href="#" onClick=  {()=>{
                            window.location.href='register'
                      }}>
                         <h4>SignUp</h4>
                      </a>
                      </p>
                     </div>
                     </form>
                    </div>
               </div>
              </div>
          )
    }

export default Login;


