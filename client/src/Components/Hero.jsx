import React from 'react'

const Hero = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '90vh', width: 'auto', marginBottom: '20px', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '90vh'}}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 font-bold fst-italic' style={{ marginTop: '40px', fontSize: '3rem'}}>Informed Today,<br/> Empowered Tomorrow...<br/><br/></h1>
              <h4 className='mb-3 font-monospace'>Get latest updates in real time</h4>
              <a href='http://localhost:5173/login' className='btn btn-outline-light btn-lg font-extrabold' role='button'>
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
