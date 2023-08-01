import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-white">
      {/* <!-- Grid container --> */ }
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */ }
        <section className="mb-4">
          
          <button className="btn fab text-dark m-1 border rounded-2">
            <i className="fab footer-icon fa-facebook-f"></i></button>
          <button
            className="btn fab text-dark m-1 border rounded-2">
              <i className="fab footer-icon fa-twitter"></i></button>
          <button
            className="btn fab text-dark m-1 border rounded-2">
              <i className="fab footer-icon fa-google"></i></button>
          <button className="btn fab text-dark m-1 border rounded-2">
              <i className="fab footer-icon fa-instagram"></i></button>
          <button
            className="btn fab text-dark m-1 border rounded-2">
              <i className="fab footer-icon fa-linkedin"></i></button>
          <button
            className="btn fab text-dark m-1 border rounded-2">
              <i className="fab footer-icon fa-github"></i></button>
        </section>
      </div>
      {/* <!-- Copyright --> */ }
      <div className="text-center text-secondary p-3 footer">
        © 2023 Copyright:
        <a className="text-white" href="https://www.linkedin.com/in/shilesh-rachakonda-283149229/"> onlinemybank.com</a>
      </div>
    </footer>
  )
}

export default Footer