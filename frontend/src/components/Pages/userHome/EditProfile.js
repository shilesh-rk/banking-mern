import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addResult } from '../../redux/userSlice'
import Loading from '../Loading/Loading';
import Error from '../Loading/Error';

const EditProfile = () => {
    const user = useSelector(state => state.userReducer.userLogin.userData)
    const id = user._id
    // const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const [errorMsg, setError] = useState()

    const [ details, setData ] = useState({
        username: '',
        email: `${user.email}`,
        phone: '',
        address: '',
        city: ''
    })
    const changeHandler = (e) => {
        setData({ ...details, [ e.target.name ]: e.target.value })
    }
    const UpdateProfile = async () => {
        try {
          const res = await axios.put(`http://localhost:5001/updateprofile/${id}`,details
          );
          localStorage.setItem('userData', JSON.stringify(res.data))
          dispatch(addResult(res.data))
        } catch (error) {
          console.error("Error While Updating:", error);
        }
      };
    const submitHandler = (e) =>{
        e.preventDefault();
        setLoading(true)
        UpdateProfile()
        setLoading(false)
    }
    return (
        <div>
            <div className="modal fade " id="login" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                        <div className='container'>   
                        {errorMsg  && <Error message = {errorMsg}/>}</div>
                        {loading && <Loading />}
                            <div className="card shadow">
                                <div className="profile-thumbnail mx-auto">
                                    <img src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=740" className="card-img-top rounded-circle border-0" alt="Jose Portrait" height="120px" />
                                </div>
                                <div className="card-body">
                                    <h2 className=" hint text-center mb-2">Profile <i className="fa-solid fa-pen-to-square"></i></h2>
                                    <form autoComplete="off" onSubmit={submitHandler}>
                                        <div className="form-group mt-3 d-flex">
                                            <label className="form-label col-3 mt-1">Full Name:</label>
                                            <input className='form-control' type="text" onChange={ changeHandler } name='username' placeholder={ user.username ? user.username : 'Name' } />
                                        </div>
                                        <div className="form-group mt-3 d-flex">
                                            <label className="form-label col-3 mt-1">Email:</label>
                                            <input className='form-control' type="email" onChange={ changeHandler } name='email' value={ user.email } placeholder={ user.email ? user.email : 'Email' } />
                                        </div>
                                        <div className="form-group mt-3 d-flex">
                                            <label className="form-label col-3 mt-1" >Mobile No:</label>
                                            <input className='form-control' type="text" onChange={ changeHandler } name='phone' placeholder={ user.phone ? user.phone : 'Mobile Number' } />
                                        </div>
                                        <div className="form-group mt-3 d-flex">
                                            <label className="form-label col-3 mt-1" >Address:</label>
                                            <input className='form-control' type="text" onChange={ changeHandler } name='address' placeholder={ user.address ? user.address : 'Address' } />
                                        </div>
                                        <div className="form-group mt-3 d-flex">
                                            <label className="form-label col-3 mt-1" >City:</label>
                                            <input className='form-control' type="text" onChange={ changeHandler } name='city' placeholder={ user.city ? user.city : 'City' } />
                                        </div>
                                        <button className="btn w-75 ms-5 btn-success mt-3" data-bs-dismiss="modal">Save Profile</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <a href='/' className="w-25 btn btn-outline-success align-self-center mb-2"><i className="fa-solid fa-house"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProfile
