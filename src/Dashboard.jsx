import React from 'react';


const Dashboard = () => {
    console.log(
        "Dashboard component rendered!"
    )
  return (
    <>
    
    <div className='cardbox' style={{width: "250px",marginTop:"90px" ,marginLeft:'90px'}}>
   
        <div class="card text-center" style={{backgroundColor:"lightred"}}>
  <div class="card-header">
   <h5>Totel books</h5>
  </div>
  <div class="card-body">
    <h5 class="card-title">2,800</h5>
  </div>

</div>   
    </div>

    <div style={{width: "250px",marginTop:"90px",marginLeft:'90px'}}>
   
   <div class="card text-center"  style={{backgroundColor:"lightblue"}}>
<div class="card-header">

<h5>Borrowed Books</h5>
</div>
<div class="card-body">
<h5 class="card-title">1,200</h5>
</div>

</div>   
</div>

<div style={{width: "250px",marginTop:"90px",marginLeft:'90px'}}>
   
   <div class="card text-center"  style={{backgroundColor:"lightgreen"}}>
<div class="card-header">
<h5>Overdue Books</h5>
</div>
<div class="card-body">
<h5 class="card-title">90</h5>
</div>

</div>   
</div>
</>
    


  )
}

export default Dashboard