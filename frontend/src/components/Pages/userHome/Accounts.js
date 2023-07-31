import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import Error from '../Loading/Error';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Accounts = () => {
  const user = useSelector(state => state.userReducer.userLogin.userData)

  const [allUsers, setAll] = useState(null)
  const [loading, setLoading] = useState()
  const [errorMsg, setError] = useState()
  const navigate = useNavigate();
     const back = () =>{
         navigate(-1)
       }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://bankingapp-t070.onrender.com/getreg');
        setAll(response.data);
      } catch (error) {
        setLoading(false)
        console.error('Error fetching data:', error);
        setError("Try Again..")
      }
    };

    fetchData();

    if(!user){
      navigate('/login')
    }
   
  },[user, navigate]);
  return (
    <div className='container mt-5 pt-5'> 
                        <div className="d-flex flex-row align-items-center back text-dark" onClick={back}><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                       &nbsp;&nbsp; <h6>Back</h6>
                    </div>
    <h3 className='text-center'>ACCOUNTS</h3>
    {
      !allUsers?<Loading/>:
    <div className='table-responsive-lg'>
        <table className='table table-striped-columns table-hover text-center'>
          <thead>
          <tr className='table-dark'>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Address</th>
            <th scope="col">Account</th>
            <th scope="col">Balance($)</th>
          </tr>
          </thead>
      { allUsers.map((item, index) => {
        return (
          <>
          <tbody>
          <tr>
            <th scope="row">{index+1}</th>
            <th scope="row">{item.username}</th>
            <td>{item.email}</td>
            <td>{item.phone?item.phone:"-"}</td>
            <td>{item.city?item.city:"-"}</td>
            <td>{item.account}</td>
            <td>{item.balance}.00</td>
          </tr>
          </tbody>
          </>
          )
        })
      }
      </table>
      </div>  
    }
    </div>
  )
}

export default Accounts