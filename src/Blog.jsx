
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({book,deleteBook,editBook,editmode}) => {
  return (
   
    <div className='col ' style={{}}>

    {/* <div > */}
      {/* <div className='d-flex'>
        <div className='content'>
          <h2 style={{ marginTop: '-20px' }}>YOUR BOOKS</h2>
        </div>
        <div className='button' style={{ marginTop: '-20px', marginLeft: '700px' }}>
          <Link to="/CreateBook" className='btn btn-success'>Create Book</Link>
        </div> */}
     
    
      <div className='card' style={{ width: '200px', marginTop: "40px" }}>
  <img  style={{height:"4rem"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwblFOGEH6ZwjITh2087mUtbSAERZDP-IUSw&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'start'}}>
    <p><span style={{fontSize:'15px'}}>Title :</span> {book.Title}</p>
    <p><span style={{fontSize:'15px'}}>Author :</span>{book.Author}</p>
    <p><span style={{fontSize:'15px'}}>ISBN :</span> {book.Isbn}</p>
    <p><span style={{fontSize:'15px'}}>Publication:</span>{book.Publication}</p>
     <Link  to="/CreateBook"> <button className='btn btn-success' onClick={()=>editBook(book.id)} style={{marginRight:"10px"}}>Edit</button> </Link>
    <button className='btn btn-danger' onClick={()=>deleteBook(book.id)}>delete</button>
  </div>
  </div>
  </div>


     
 
  );
}

export default Blog;
