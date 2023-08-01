import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLog } from './redux/userSlice'
import Loading from './Pages/Loading/Loading'
import Error from './Pages/Loading/Error'

const Login = () => {
  const [ token, setToken ] = useState()
  const [ loading, setLoading ] = useState()
  const [ errorMsg, setError ] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [ data, setData ] = useState({
    email: '',
    password: ''
  })
  const changeHandler = (e) => {
    setData({ ...data, [ e.target.name ]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError(false)
    await axios.post('https://bankingapp-t070.onrender.com/login', data).then(
      res => {
        setToken(res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data))
        dispatch(userLog(res.data))
      }
    ).catch((err) => {
      setLoading(false)
      setError("Invalid Credentials")
    })
  }
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [ navigate, token ])
  return (
    <>
      <div className='container'>
        { errorMsg && <Error message={ errorMsg } /> }</div>
      { loading && <Loading /> }
      <div className='d-flex justify-content-center m-5'>
        <div className="card text-center mt-5 mb-5">
          <div className="card-header  fs-4 fw-bold text-white head">
            Login
          </div>
          <div className="card-body">
            <form autoComplete="off" onSubmit={ submitHandler }>
              <div className="form-group was-validated required">
                <div className="form-floating p-1"><input type="email" className="form-control border-success" onChange={ changeHandler } name='email' placeholder='Email' /><label htmlFor="floatingInput">Email</label></div>
              </div>
              <div className="form-group was-validated required">
                <div className="form-floating p-1"><input type="password" className="form-control border-success" onChange={ changeHandler } name='password' placeholder='Password' /><label htmlFor="floatingInput">Password</label></div>
              </div>
              <button className="btn w-50 mx-auto rounded-3 btn-outline-success mt-3 d-flex justify-content-center" type="submit">Login</button>
            </form>
          </div>
          <div className="card-footer text-muted">
            Not have an Account ? <Link to='/register' className='text-success'>Click here</Link>
          </div>
        </div>
      </div>
    </>

  )
}
export default Login
