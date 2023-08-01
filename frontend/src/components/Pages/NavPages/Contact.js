import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr className='border-success' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/message-sent-concept-illustration_114360-3363.jpg?w=740&t=st=1690729696~exp=1690730296~hmac=2bcb8c69e31958bc5d8f4aaaa070bc16694c1f774714e53fca339342cf763767" alt="Contact Us" height="400px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control border-success" id="exampleForm" placeholder="John Smith" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control border-success" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-success">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
