import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-white">
      {/* <!-- Grid container --> */ }
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */ }
        <section className="mb-4">
          {/* <!-- Facebook --> */ }
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab footer-icon fa-facebook-f"></i
          ></a>

          {/* <!-- Twitter --> */ }
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab footer-icon fa-twitter"></i
          ></a>

          {/* <!-- Google --> */ }
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab footer-icon fa-google"></i
          ></a>

          {/* <!-- Instagram --> */ }
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab footer-icon fa-instagram"></i
          ></a>

          {/* <!-- Linkedin --> */ }
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab footer-icon fa-linkedin"></i
          ></a>
          {/* <!-- Github --> */ }
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab footer-icon fa-github"></i
          ></a>
        </section>
        {/* <!-- Section: Social media --> */ }
      </div>
      {/* <!-- Grid container --> */ }

      {/* <!-- Copyright --> */ }
      <div className="text-center text-secondary p-3 footer">
        © 2023 Copyright:
        <a className="text-white" href="https://www.linkedin.com/in/shilesh-rachakonda-283149229/"> onlinemybank.com</a>
      </div>
      {/* <!-- Copyright --> */ }
    </footer>
  )
}

export default Footer