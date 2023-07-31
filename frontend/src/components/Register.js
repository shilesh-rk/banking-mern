import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLog } from './redux/userSlice'
import Loading from './Pages/Loading/Loading'
import Error from './Pages/Loading/Error'

const Register = () =>{
    const [email, setUserEmail] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const [errorMsg, setError] = useState()
    const [data,setData] = useState({
      username:'',
        email:'',
        password:'',
        confirmPassword:'',

    })
    const changeHandler= (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        if(data.password !== data.confirmPassword){
          setLoading(false)
          setError("Password Miss Match")
          // alert("password miss match")
        }else{
          setLoading(true)
          setError(false)
       await axios.post('http://localhost:5001/register', data).then(
            res => {setUserEmail(res.data.email);
            localStorage.setItem('userData',JSON.stringify(res.data))
          dispatch(userLog(res.data))}
        ).catch((err)=>{
          setLoading(false)
          setError(err.response.data)
            console.log(err)})}
    }
    useEffect(() => {
      if(email){
        navigate('/')
      }
    }, [navigate, email])
    return (
        <div className='d-flex justify-content-center'>
<div class="card text-center w-50 mt-5">
  <div class="card-header head fs-4 fw-bold text-white">
    Register
  </div>
  <div className='container'>   
  {errorMsg  && <Error message = {errorMsg}/>}</div>
  {loading && <Loading />}
  <div class="card-body">
    <form  onSubmit={submitHandler}>                            
            <div className="form-group was-validated required">
                <label className="form-label">Your FullName:</label>
                <input className='form-control' type="text" onChange={changeHandler} name='username' placeholder='Full Name'/>
                <div className="invalid-feedback">
                  Please enter your FullName
                </div>
            </div>
            <div className="form-group was-validated required">
                <label className="form-label">Your Email:</label>
                <input className='form-control' type="email" onChange={changeHandler}name='email' placeholder='Email'/>
                <div className="invalid-feedback">
                  Please enter your email address
                </div>
            </div>
            <div className="form-group was-validated required">
                <label className="form-label">Your Password:</label>
                <input className='form-control' type="password" onChange={changeHandler}name='password' placeholder='Password'/>
                <div className="invalid-feedback">
                  Please enter your password
                </div>
          </div>

            <div className="form-group was-validated required">
                <label className="form-label">Confirm Password:</label>
                <input className='form-control' type="password" onChange={changeHandler}name='confirmPassword' placeholder='Confirm Password'/>
                <div className="invalid-feedback">
                 Again enter your password
                </div>
          </div>
          <button className="btn w-50 mx-auto rounded-3 btn-outline-success mt-3 d-flex justify-content-center" type="submit">Register</button>
        </form>
  </div>
  <div class="card-footer text-muted">
  Already have an Account ! <Link to='/login' className='text-success'>Click here</Link>
  </div>
</div>
</div>
    )
}
export default Register
