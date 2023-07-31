import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const user = useSelector(state => state.userReducer.userLogin.userData)
  return (
    <>
    <div>
        <div className='container'>
				<div className='row mt-2'>
					<div className='col-md-6'>
						<img
							src='https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-12881.jpg?w=996&t=st=1685561893~exp=1685562493~hmac=5edb1c1d6b701371e7d25c1b6ef5aa0e04675b2cd571cb952ec466e635d27df9'
							alt=''
							height={400}
							width="100%"
						/>
					</div>
					<div className='col-md-6 mt-5'>
						<h3 className='text-center about fw-bold'>We are Providing</h3>
						<p className='text-center'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos
							quo voluptates molestias eaque, asperiores non error laborum nulla
							vitae dolore natus velit amet. Reiciendis deserunt ipsum earum
							voluptatum? Eos, eveniet reprehenderit voluptatibus dolor aut
							maxime ut, excepturi accusantium nam velit placeat, harum sunt
							pariatur cupiditate tenetur quibusdam laudantium. Odio rerum nisi
							quam, quidem ad, voluptatibus error impedit dolorum ut porro
							libero adipisci ipsa consectetur voluptatem nihil recusandae!
							Delectus, cupiditate numquam consectetur aut id obcaecati quis
							expedita quam natus accusamus!
						</p>
						<marquee className='fw-bolder fs-4 text-success' direction='left'>
							WelCome! {user?user.username:null}
						</marquee>
					</div>
				</div>
    <hr />
			
    {user?
        <div className="container rounded-5 d-flex justify-content-between mb-3 w-75 icons">
        <div>
        <Link to="/userProfile" className="my-profile bg-body-secondary mt-2 d-flex justify-content-center align-items-center icon-border user-icons" ><i className="fa-solid font-icon fa-user fs-1"></i></Link>
        <p className='text-center fw-bold'>My Profile</p>
        {/* <input type="text" value={data.user.name} /> */}
        </div>
        <div>
        <Link to={`/addmoney/${user._id}`} className="add-money bg-body-secondary mt-2 d-flex justify-content-center align-items-center icon-border user-icons"><i className="fa-solid font-icon fa-wallet fs-1"></i></Link>
        <p className='text-center fw-bold'>Add Money</p>
        </div>
        <div>
        <Link to={`/transfer` }className="withdraw-money bg-body-secondary mt-2 d-flex justify-content-center align-items-center icon-border user-icons"><i className="fa-solid font-icon fa-money-bill-transfer fs-1"></i></Link>
        <p className='text-center fw-bold'>Transfer</p>
        </div>
        <div>
        <Link to="/allaccounts" className="history bg-body-secondary mt-2 d-flex justify-content-center align-items-center icon-border user-icons"><i className="fa-solid font-icon fa-users fs-1"></i></Link>
        <p className='text-center fw-bold'>Accounts</p>
        </div>
        </div>:null}
      
       <div>
        <h3 className="securityInfo ">For Your Own Security</h3>
<div className='container alerts'>
    <div className='row mt-2'>
        <div className='col-md-6'>

<p className="fa-solid font-icon fa-circle-check check "><span className="points">The URL in your browser address bar begins with "https".</span></p>
<p className="fa-solid font-icon fa-circle-check check "><span className="points">The address or status bar displays the padlock symbol.</span></p>
<p className="fa-solid font-icon fa-circle-check check "><span className="points">Click the padlock to view and verify the security certificate.</span></p>
<p className="fa-solid font-icon fa-circle-check check d-flex justify-content-evenly"><span className="points">The address bar turns green indicating that the site is secured  with an SSL Certificate that meets the Extended Validation Standard..</span></p>
<p className="fa-solid font-icon fa-circle-check check "><span className="points">The URL in your browser address bar begins with "https".</span></p>
        </div>

        <div className='col-md-6'>
            
<p className="fa-solid font-icon fa-circle-check check d-flex justify-content-evenly"><span className="points">Phishing is a fraudulent attempt, usually made through email, phone calls, SMS etc seeking your personal and confidential information.</span></p>
<p className="fa-solid font-icon fa-circle-check check d-flex justify-content-evenly"><span className="points">BigBank or any of its representative never sends you email/SMS or calls you over phone to get your personal information,password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on report.phishing@bb.co.in if you receive any such email/SMS or Phone call. Please lock your user access immediately, if you have accidentally revealed your credentials.Click here to lock.</span></p>

        </div>
    </div>
</div>
    </div>

    </div>
    </div>
        </>
  )
}

export default Dashboard