import React from 'react'
import { useFormik } from 'formik'
import './login.scss'

import { useDispatch } from 'react-redux'
import { dangNhapAction } from '../../redux/action/QuanLyUserAction'
export default function Login() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      userName: '',
      pass: ''
    },
    onSubmit: values =>{
      // alert(values)
      const action = dangNhapAction(values)
      dispatch(action)
      console.log(values);
    },
  });
 

  return (
    <div className='login'>
          <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
      <form onSubmit={(event) =>{
        event.preventDefault();
        formik.handleSubmit(event)
      }}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input name='userName' onChange={formik.handleChange} placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        {/* <input type="password" name="password" autocomplete="on" ></input> */}
        <input name='pass' onChange={formik.handleChange} type="password"   placeholder="Password" id="password"/>
        <button>Log In</button>
      </form>

    </div>
  )
}
