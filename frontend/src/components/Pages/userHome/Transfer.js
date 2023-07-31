import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResult } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading';
import Error from '../Loading/Error';

const Transfer = () => {
  const user = useSelector(state => state.userReducer.userLogin.userData)
  const [ allUsers, setAll ] = useState(null?[]:[])
  const [ toUser, setToUser ] = useState([])
  const [ amount, setAmount ] = useState("")
  const [loading, setLoading] = useState()
  const [errorMsg, setError] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get('https://bankingapp-t070.onrender.com/getreg');
        setLoading(false)
        setAll(response.data);
      } catch (error) {
        setLoading(false)
        console.error('Error fetching data:', error);
        setError("Please refresh the page")
        
      }
    };

    fetchData();
    if(!user){
      navigate('/login')
    }
   
  },[user, navigate]);

  const handleSelectChange = (e) => {
    // Access the selected item and its properties here
    const selectedValue = e.target.value;
    setToUser(selectedValue !== '' ? JSON.parse(selectedValue) : null);
  };
  const toAmount =  parseInt(toUser.balance) + parseInt(amount)
  console.log(allUsers);
  console.log("toUser",toUser);

  const transferData = async () => {
    try {
      const response = await axios.put(`https://bankingapp-t070.onrender.com/transfer/${user._id}`,{
        "toId": (toUser._id),
        "amount": parseInt(amount) })
        dispatch(addResult(response.data[0]))
        localStorage.setItem('userData', JSON.stringify(response.data[0]))
        setToUser(response.data[1])
        console.log("Updated balance:", response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
        setError("Transaction Failed ")
      } 
  };
  const transferMoney = async (e) =>{
    e.preventDefault();
    if(amount){
      setLoading(true)
      setError(false)
      if (amount<user.balance) {
        await transferData();
        setLoading(false)
        setAmount(0)
      } else {
        setLoading(false)
        setError("Insufficient Balance")
      }
    } else{
      setError("Please Enter the Amount (select the Account)")
    }
  }

  return (
    <div className='container'>
      <div className='row mt-5 px-5 d-flex justify-content-between'>
        <p className='text-success fw-2 mt-5' role='button' onClick={ back }><i className="fa fa-long-arrow-left mr-1 mb-1"></i> Back</p>
        <div className='container'>   
          {errorMsg  && <Error message = {errorMsg}/>}</div>
          {loading && <Loading />}
          { user &&
        <div className='col-md-5  border border-primary'>
          <div className="payment-info">
        <p>From Account : {(user.account).toString().split(/(\d{4})/).join(' ')}</p><hr className="line" />
            <div className="row">
              <div className="col-md-6"><label className="credit-card-label">Name</label><input type="button" className="form-control focus-ring  credit-inputs text-center" value={ user.username } style={ { "--bs-focus-ring-color": "none", "cursor": "default", "fontSize": "15.3px" } } /></div>
              <div className="col-md-6"><label className="credit-card-label">Email</label><input type="button" className="form-control focus-ring credit-inputs text-center" value={ user.email } style={ { "--bs-focus-ring-color": "none", "cursor": "default", "fontSize": "15.3px" } } /></div></div>
            <div><label className="credit-card-label">Account Number</label><input type="button" className="form-control focus-ring credit-inputs text-center" value={ (user.account).toString().split(/(\d{4})/).join(' ') } style={ { "--bs-focus-ring-color": "none", "cursor": "default", "fontSize": "15.3px" } } /></div>
            <div><label className="credit-card-label">A/C Balance</label><div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text dollar credit-inputs">$</span>
              </div>
              <input type="button" className="form-control credit-inputs focus-ring text-center" value={ user.balance } style={ { "--bs-focus-ring-color": "none", "cursor":"default" } } />
              <div className="input-group-append">
                <span className="input-group-text zeros credit-inputs">.00</span>
              </div>
            </div></div>
            <hr className="line" />
            <div className="d-flex justify-content-between information px-4"><p>A/C &nbsp;Balance</p><p>${ user.balance }</p></div>
            <div className="d-flex justify-content-between information px-4"><p>Final Amount</p><p>{ `$${parseInt(user.balance)-parseInt(amount||0)}` }</p></div>
          </div>
        </div>}
        <div className='col-md-6 border border-success'><div className="payment-info">
            <p>To Account: {toUser.account?(toUser.account).toString().split(/(\d{4})/).join(' '):"Select an Account"}</p><hr className="line" />
          <div className="row">
            <div className="col-md-6">
              <label className="credit-card-label text-danger">Select Account</label>
              <select className="w-100 text-center rounded-2 credit-inputs focus-ring" onChange={ handleSelectChange } style={ { "--bs-focus-ring-color": "none", "cursor": "pointer", "fontSize": "15.3px", "height": "35.6px" } }>
                <option value={ JSON.stringify(toUser) }>Select</option>
                { allUsers? allUsers.map((item) => {
                  return (

                    <option key={ item._id } value={ JSON.stringify(item) }> { (item.username) } - { (item.account).toString().slice(-4) } </option>

                  )
                }):"" }
              </select>
            </div>
            <div className="col-md-6"><label className="credit-card-label">Email</label><input type="button" className="form-control focus-ring credit-inputs text-center" value={ toUser.email ? toUser.email : "Email" } style={ { "--bs-focus-ring-color": "none", "cursor": "default", "fontSize": "15.3px" } } /></div></div>
          <div><label className="credit-card-label">Account Number</label><input type="button" className="form-control focus-ring credit-inputs text-center" value={ (toUser.account ? toUser.account : "Account Number").toString().split(/(\d{4})/).join(' ') } style={ { "--bs-focus-ring-color": "none", "cursor": "default", "fontSize": "15.3px" } } /></div>
          <div><label className="credit-card-label">A/C Balance</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text dollar credit-inputs">$</span>
            </div>
            <input type="button" className="form-control credit-inputs focus-ring text-center" value={ toUser.balance ? toUser.balance : "Account Balance" } style={ { "--bs-focus-ring-color": "none", "cursor":"default" } } />
            <div className="input-group-append">
              <span className="input-group-text zeros credit-inputs">.00</span>
            </div>
          </div>
          </div>
          <hr className="line" />
          <div className="d-flex justify-content-between information px-5"><p>Total Amount</p><p>${ toUser.balance ? (toAmount?toAmount:toUser.balance): 0 }</p></div>
          
            <div className="d-flex justify-content-space-evenly">
            <div className="input-group">
            <div className="input-group-prepend w-100">
              <span className="input-group-text rounded-2 fw-bold border-success">$<input type='number' className='w-100 ms-2 rounded-2 fw-bold border-0 focus-ring text-center' placeholder='Enter Amount' value={ amount === 0 ? "" : amount } onChange={e => setAmount(e.target.value)} style={ { "--bs-focus-ring-color": "none" }}/>

              </span>
            </div>
          </div>
              <button className='btn w-50 ms-3 btn-success fw-bold' onClick={transferMoney}>Transfer&nbsp; <i className="fa-solid fa-arrow-up fw-bold"></i></button>
            
          </div>
        </div></div>
      </div>
    </div>
  )
}

export default Transfer