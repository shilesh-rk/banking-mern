import React from 'react'

export default function Service() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade mx-5 mt-2" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.investopedia.com/content/commentary/can_the_banking_indu/banking_fintech_shutterstock_400246663.jpg" class="d-block w-100" style={ { height: "300px" } } alt=" " />
          </div>
          <div class="carousel-item">
            <img src="https://th.bing.com/th/id/R.8a1427d08babefe1a5d7c80d65c96917?rik=UJUR4Tyf%2frjUvQ&riu=http%3a%2f%2fwww.canterbury.ac.nz%2fabout%2ffinance%2fFinancial-Services_1360143238684410054.jpg&ehk=EB9rwVKwRmbjuiit3xlnDFnMlLi0qY5ycRFfA1Cq%2fN8%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" style={ { height: "300px" } } alt=" " />
          </div>
          <div class="carousel-item">
            <img src="https://w0.peakpx.com/wallpaper/577/400/HD-wallpaper-safe-in-hands-saving-money-concepts-metal-safe-box-banking-concepts-online-banking-money-guard-bank.jpg" class="d-block w-100" style={ { height: "300px" } } alt=" " />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="row mx-5 p-5 text-center">
        <div class="col-sm-3 mb-3">
          <div class="card text-bg-dark">
            <img src="https://4.imimg.com/data4/SI/OT/GLADMIN-9510865/scroll2-500x500.jpg" style={ { height: "300px" } } class="card-img" alt="..." />
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
              <h5 class="card-title">Education Loan</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card text-bg-dark">
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/01/12/641178-homeloan-thinkstock-011218.jpg" style={ { height: "300px" } } class="card-img" alt="..." />
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
              <h5 class="card-title">Home Loan</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card text-bg-dark">
            <img src="https://cdn.dnaindia.com/sites/default/files/2021/02/21/959404-car-loan.jpg" style={ { height: "300px" } } class="card-img" alt="..." />
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
              <h5 class="card-title">Car Loan</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card text-bg-dark">
            <img src="https://tse4.mm.bing.net/th?id=OIP.MiDSSE4MAFK8pRhpdExPwQHaEB&pid=ImgDet&rs=1" style={ { height: "300px" } } class="card-img" alt="..." />
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
              <h5 class="card-title">Personal Loan</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
