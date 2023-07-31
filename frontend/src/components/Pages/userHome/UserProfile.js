import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import EditProfile from './EditProfile'

const UserProfile = () => {
    const user = useSelector((state)=>state.userReducer.userLogin.userData)
    const navigate = useNavigate();
     const back = () =>{
         navigate(-1)
       }
       useEffect(()=>{
           if(!user){
               navigate('/login')
           }
       },[user, navigate])
  const name =user?(user.username).split(" "):null
  return (
        <>
      <div className="container rounded bg-white mt-5">
        {user ? 
    <div className="row">
        <div className="col-md-4 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5 mb-4" src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=740" width="140" alt="avatar"/><h6 className="fs-5 fw-bold text-success">{user.username}</h6><span className="text-black-50"></span><h6>A/C No. { (user.account).toString().split(/(\d{4})/).join(' ') }</h6><h6>$ {user.balance}</h6>
            </div>
        </div>
        <div className="col-md-8">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back" onClick={back}><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                       &nbsp;&nbsp; <h6>Back</h6>
                    </div>
                    <h6 className="text-right back" data-bs-toggle="modal" data-bs-target="#login">Edit &nbsp;<i className="fa-solid fa-user-pen"></i></h6>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" aria-disabled="true" value={name[0]} placeholder=""/><label htmlFor="floatingInput">First Name</label></div>
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" value={name[1]} placeholder=""/><label htmlFor="floatingInput">Last Name</label></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" placeholder="email" value={user.email}/><label htmlFor="floatingInput">Email Address</label></div>
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" value={user.phone} placeholder="Phone number"/><label htmlFor="floatingInput">Phone Number</label></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" placeholder="Account Number" value={user.account}/><label htmlFor="floatingInput">Account Number</label></div>
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" value={`$ ${user.balance}`} placeholder="Account Balance"/><label htmlFor="floatingInput">Balance</label></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" placeholder="address" value={user.address}/><label htmlFor="floatingInput">Address</label></div>
                    <div className="col-md-6 form-floating p-1"><input type="button" className="form-control user-form border-success text-start pe-none user-select-auto" value={user.city} placeholder="City"/><label htmlFor="floatingInput">City</label></div>
                </div>
                {/* <div className="mt-5 text-right"><button className="btn btn-outline-success" type="button">Save Profile</button></div> */}
            </div>
        </div>
    </div>:null}
    </div>
    {user && <EditProfile/>}
</>
  )
}

export default UserProfile