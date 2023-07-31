import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../../redux/userSlice'
import '../../../App.css'

const Navbar = () => {
  const user = useSelector(state => state.userReducer.userLogin.userData)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogout = () =>{
    dispatch(logout())
    navigate("/")
}
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a href='/' className="bank-logo mx-5"><i className="fa-solid fa-comments-dollar fs-3"></i> My<span className='text-secondary'>Bank</span></a>
    <button className=" navbar-toggler text-success border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href='/' className="nav-link navText" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a href='/about' className="nav-link navText">About</a>
        </li>
        <li className="nav-item">
          <a href='/contact' className="nav-link navText">Contact</a>
        </li>
        <li className="nav-item">
          <a href='/service' className="nav-link navText">Service</a>
        </li>
      </ul>
      {user?<button className="btn btn-outline-success me-2" type="submit" onClick={userLogout}>Logout</button>:
      <form className="d-flex">
        <button onClick={()=>navigate("/login")} className="me-2 btn btn-outline-success" type="submit">Login</button>
        <button onClick={()=>navigate("/register")} className="btn btn-outline-success" type="submit">Register</button>
      </form>}
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar