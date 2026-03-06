import React from 'react'

const Header = () => {
  return (
   <header>
    <div className="contentcontainer">
        {/* <img src="logo.svg" alt="" /> */}
        <h3 className='headertitle'>VEETECH-NG</h3>
        <div className="navlinks">
    <div className="navlink">Home</div>
    <div className="navlink">Services</div>
    <div className="navlink">Projects</div>
    <div className="navlink">About</div>
    <div className="navlink">Careers</div>
    <div className="navlink">Blogs</div>
    <div className="navlink contactbtn">Contact Us</div>
</div>
      
    </div>
   </header>
  )
}

export default Header