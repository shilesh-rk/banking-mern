import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-success fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur. Unde adipisci hic provident est sint corporis, dolorem esse autem soluta molestiae optio quisquam eligendi obcaecati minima?
                        </p>
                        <NavLink to="navbar/contact" className="btn btn-success px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/concept-connecting-teams-landing-page_52683-26518.jpg?w=1060&t=st=1690729401~exp=1690730001~hmac=f57ac0aa65efafc2907104fc4ab244bd83b7e6f2889609d9b35bf41997d8c342" alt="About Us" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
