import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
 <>
  <nav class="navbar" style={{width:'80%',marginLeft:'20%',backgroundColor: 'lightblue'}}>

  <div class="container-fluid">
     <h3 class="navbar-brand">BOOKSTORE<IoMdNotificationsOutline style={{marginLeft:'10px',backgroundColor:'white',fontSize:'30px',borderRadius:"8px"}} /></h3>
     
     <form class="d-flex" role="search" style={{marginLeft:'-20px'}}>

    </form>
   <h5 style={{marginLeft:'-20px'}}>TONY STARK</h5>
  </div>
</nav>
 </>
    
  )
}

export default Navbar