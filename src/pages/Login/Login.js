import React, { useState } from 'react'
import { useFormik } from 'formik'
import './login.scss'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { dangNhapAction } from '../../redux/action/QuanLyUserAction'
import { history } from '../../App'

export default function Login(props) {

  //Set goi y
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  const dispatch = useDispatch();
  const { userLogin } = useSelector(state => state.QuanLyUserReducer);

  const formik = useFormik({
    initialValues: {
      key: '',
      secret: ''
    },
    validationSchema: Yup.object({
      key: Yup.string().required('key không được để trống').matches('v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ', 'key phải đúng ký tự gợi ý'),
      secret: Yup.string().required('secret không được để trống').matches('91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H', 'secret phải đúng ký tự gợi ý'),
    }),
    onSubmit: values => {
      // alert(values)
      const action = dangNhapAction(values)
      dispatch(action)
      // console.log(values);
      // console.log('userLogin', userLogin);
    },
  });


  if (localStorage.getItem('USER_LOGIN')) {
    alert('Đăng nhập thành công.');
    history.goBack()
    return null
  } else {
    return (
      <div className='login'>
        <div className='suggest'>
          <h4 onClick={handleToggle}>Gợi ý</h4>
          <div className={`suggest-text ${!isActive ? "active" : ''}`}>
            <p>Key: v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ</p>
            <p>Secret: 91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H</p>
          </div>
        </div>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit(event)
        }}>
          <h3>Login Here</h3>
          <label htmlFor="username">Key</label>
          <input
            name='key'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="your key" id="username" />
          {formik.touched.key && formik.errors.key ? (
            <div className='alert alert-danger mt-2 w-50'>{formik.errors.key}</div>
          ) : null}
          <label htmlFor="password">Secret</label>
          {/* <input type="password" name="password" autocomplete="on" ></input> */}
          <input name='secret' onChange={formik.handleChange} onBlur={formik.handleBlur}

            placeholder="Your Secret" id="password" />
          {formik.touched.secret && formik.errors.secret ? (
            <div className='alert alert-danger mt-2 w-50'>{formik.errors.secret}</div>
          ) : null}
          {/* {console.log('userLogin', userLogin)} */}
          <button onClick={() => {
            if (localStorage.getItem('USER_LOGIN')) {
              history.push('/home')
            }
          }}>sunmit</button>


        </form>

      </div>
    )
  }



}
