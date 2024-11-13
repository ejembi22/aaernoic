import React from 'react'
import Logo from "./assets/images/Logo (2).png"

const Header = () => {
  return (
    <div className='row  '>
        
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
        <nav class="navbar navbar-expand-lg bg-body-white">
        
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <img src={Logo} alt="logo" className='px-4 bbb'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link aboutus" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Careers</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <div class="d-flex conandgetbtn ">
      <button class="btn btn-outline-success me-4  border-warning text-warning button1" type="clickable">Contact us</button>
        <button class="btn btn-outline-success  button1 bg-warning text-dark border-warning" type="clickable">Get started</button>
      </div>
    </div>
  </div>

            




         
  </nav>
         
         




            </div>
       
       

        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 '>
        
            





            


       
       
        
        
        
        
        
        
    </div>
    
    </div>
    
  )
}

export default Header
