import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResult } from '../../redux/userSlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Error from '../Loading/Error';
import './profile.css'

const Addmoney = () => {
  const user = useSelector(state => state.userReducer.userLogin.userData)
  const navigate = useNavigate();
  useEffect(()=>{

    if(!user){
      navigate('/login')
  }
  },[user, navigate])
  console.log(user);
  const [ change, setChange ] = useState(0);
  const [ password, setPassword ] = useState()

  const [loading, setLoading] = useState()
  const [errorMsg, setError] = useState()

  const dispatch = useDispatch();
  const { id } = useParams()
  const back = () => {
    navigate(-1)
  }
  console.log("id", id)
  const fetchBalance = async (inc, dec) => {
    try {
      const res = await axios.put(`http://localhost:5001/getusers/${id}`, { //we have to send change to backend for handling error in UI
        'Balance': inc ? inc : null,
        'Draw_Balance': dec ? dec : null,
      });
      dispatch(addResult(res.data))
      localStorage.setItem('userData', JSON.stringify(res.data))
      console.log("Updated balance:", res.data.balance);
      
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };
  // console.log("token",user?.token);

  const addM = async (e) => {
    e.preventDefault();
    if (change) {
      setError(false)
      setLoading(true)
      await fetchBalance(change, null);
      setLoading(false)
      setChange(0)
    } else {
      setLoading(false)
      setError("Please Enter the Amount")
    }

  };

  const drawM = async (e) => {
    e.preventDefault();
    if(change){
      setLoading(true)
      setError(false)
      if (change<=user.balance) {
        await fetchBalance(null, change);
        setLoading(false)
        setChange(0)
      } else {
        setLoading(false)
        setError("Insufficient Balance")
      }
    } else{
      setError("Please Enter the correct Amount")
    }
  };
  return (
    <div>
   <div className='container'>   
    {errorMsg  && <Error message = {errorMsg}/>}
    </div>
    {loading && <Loading />}
    { user? <div className="container mt-5 d-flex justify-content-center">
        <div className="row">
          <div className="col-md-7">
            <p className='text-success fw-2' role='button' onClick={ back }><i className="fa fa-long-arrow-left mr-1 mb-1"></i> Back</p>
            <div className='card-div'>
              <div className="card-info">
                <div className='d-flex justify-content-between px-2'>
                  <p className="brand Emblema-font"><i class="fa-solid fa-comments-dollar fs-3"></i> MyBank</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/1436/1436392.png" className='mt-2 card-png' alt='png' />
                </div>
                <img className="chip-img" alt="Icons8 flat sim card chip" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Icons8_flat_sim_card_chip.svg/512px-Icons8_flat_sim_card_chip.svg.png" />
                <p className='card-text'>Card Number</p>
                <h1 className='number'>{ (user.account).toString().split(/(\d{4})/).join(' ') }</h1>
                <div className='d-flex justify-content-between'>
                  <div className='mt-3'>
                    <p className='card-text'>Card Holder</p>
                    <h5 className='card-name'>{ user.username }</h5>
                  </div>
                  <div className='mt-3'>
                    <p className='card-text'>Expiry Date</p>
                    <h5 className='card-name'>08/25</h5>
                  </div>
                  <img src="https://seeklogo.com/images/V/VISA-logo-DD37676279-seeklogo.com.png" className="brand m-4" alt='png' />
                </div>
              </div>
              <button className="btn btn-primary btn-block d-flex justify-content-between mt-2 w-100" type="button" onClick={ drawM }><span><i className="fa fa-long-arrow-left ml-1"></i> ${ change ? change : 0 } </span><span>Withdraw</span></button>
            </div>
          </div>

          <div className="col-md-5 mt-2">
            <div className="payment-info">
              <div className="row">
                <div className="col-md-7"><label className="credit-card-label">Email</label><input type="text" className="form-control focus-ring credit-inputs text-center" value={ user.email } style={ { "--bs-focus-ring-color": "none", "cursor": "default", "fontSize": "15.3px" } } /></div>
                <div className="col-md-5"><label className="credit-card-label">Password</label><input type="password" className="form-control credit-inputs text-center" placeholder="Enter Password" onChange={ (e) => setPassword(e.target.value) } /></div>
              </div>
              <div><label className="credit-card-label">Amount</label><div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text dollar credit-inputs">$</span>
                </div>
                <input type="number" className="form-control credit-inputs focus-ring text-center" onChange={ (e) => setChange(e.target.value) } value={ change === 0 ? "" : change } placeholder="Enter Amount" style={ { "--bs-focus-ring-color": "none" } } />
                <div className="input-group-append">
                  <span className="input-group-text zeros credit-inputs">.00</span>
                </div>
              </div></div>
              <hr className="line" />
              <div className="d-flex justify-content-between information"><p>Total Amount</p><p>${ user.balance }</p></div>
              <div className="d-flex justify-content-between information"><h6>balance</h6><h6>${ change ? change : 0 }</h6></div>
              <button className="btn btn-success btn-block d-flex justify-content-between mt-3 w-100" type="button" onClick={ addM }><span>Add</span><span>${ change ? change : 0 } <i className="fa fa-long-arrow-right ml-1"></i></span></button></div>
          </div>
        </div>
      </div>:null}
      
    </div>
  )
}

export default Addmoney