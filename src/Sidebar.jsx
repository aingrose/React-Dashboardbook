import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { FaBloggerB ,FaRegUser} from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
    <div  className="sidebar-container" style={{width:"20%" , backgroundColor:"#FF004D",height:"100vh",marginTop:"-70px"}}>
    <h2 style={{paddingTop:'20px',color:'white',fontSize:'40px'}}>BOOKS CLUB</h2>
    <div className='img'  style={{paddingTop:'30px',paddingBottom:"20px"}} > <img src='https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D' className='img' style={{width:'90px',height:'90px'}}></img></div>
   
    
    <hr style={{width:"100%",marginTop:'20px',textAlign:'center'}}></hr>
    <div className='blog-section' style={{marginTop:"50px"}}>

    <Link to='/Dashboard' className='dashtext' style={{textDecoration: 'none'}}><h3  style={{textAlign:'start',marginLeft: '20px',fontSize:'25px',color:"lightblue",marginBottom:'40px'}}><MdOutlineDashboard style={{marginTop:'-20px',marginRight:'20px'}}/>DashBoard</h3>   </Link>
    <Link to='/Blog' style={{textDecoration: 'none'  }} ><div><h3 style={{textAlign:'start',marginLeft: '20px',fontSize:'25px',color:"lightblue",marginBottom:'40px'}}><IoLibraryOutline  style={{marginTop:'-20px',marginRight:'20px'}}/>Library</h3> </div> </Link>
    <Link to='/CreateBook' style={{textDecoration: 'none'  }} ><h3 style={{textAlign:'start',marginLeft: '20px',fontSize:'25px',color:"lightblue",marginBottom:"40px"}}><FaRegUser style={{marginTop:'-20px',marginRight:'20px'}}/>CreateBook</h3>  </Link>
    </div> 
    </div>
    </>

  )
}

export default Sidebar    