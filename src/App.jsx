// import logo from './logo.svg';
// import './App.css';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import Blog from './Blog';
// import CreateBook from './CreateBook';



// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter>
//     <Navbar />
//    <Sidebar/>
//       <Routes>
//         <Route>
//           <Route path='/Dashboard' element={<Dashboard />} />
//           <Route path='/Blog' element={<Blog/>} />
//           <Route path='/CreateBook' element={<CreateBook/>}/>
//         </Route> 
//       </Routes>
//     </BrowserRouter>
   
//     </div>
//   );
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Blog from './Blog';
import CreateBook from './CreateBook';
import { useState } from 'react';

function App() {

  let [user,setuser] = useState({})
  let[editmode,seteditmode] = useState(false)


  


  let [books,setbooks]=useState(
    [
    {
      id:1,
      Title:'Harry Potter',
      Author:'Leo Das',
      Isbn:'signet',
      Publication:'12/10/2001'
    },
    {
      id:2,
      Title:'the Bible',
      Author:'jeses',
      Isbn:'a290utw',
      Publication:'14/10/2002'
    },
    {
      id:3,
      Title:'The Quran',
      Author:'Allah',
      Isbn:'12hqyp',
      Publication:'09/12/2003'
    },
    {
      id:4,
      Title:'Lord of Ring',
      Author:'Arnold',
      Isbn:'!2dxjsi',
      Publication:'12/3/2001'
    },
   


  ])
 let deleteBook = (id) =>{
   
  let upatedBook =  books.filter((book)=>book.id !== id )
  setbooks(upatedBook)
 }

 let editBook = (id) => {

  let bookEdit = books.find((book)=>book.id === id)

   setuser({
    id:bookEdit.id,
    Title:bookEdit.Title,
    Author:bookEdit.Author,
    Isbn:bookEdit.Isbn,
    Publication:bookEdit.Publication
   })

  seteditmode(true);
 
 
  


 }
 
  return (
    // <div className="App">
     
    //   <BrowserRouter>
     
    //     <Navbar />
        
    //     <Sidebar />
    //     <div className='containar-fluid'> 
    // <div className='row'></div>
    //     <Routes>
    //       <Route>
    //         <Route path='/Dashboard' element={<Dashboard />} />
            
    //         <Route path='/Blog' element={
    //           <>
    //           {console.log(books)}
    //           {books.map((book)=>(  
    //            <Blog key={book.id} book={book} deleteBook={deleteBook} editBook={editBook}/>
    //           ))}
    //           </>
    //         } />
    //         <Route path='/CreateBook' element={<CreateBook user={user} setbooks={setbooks} setuser={setuser} editBook={editBook} editmode={editmode} seteditmode={seteditmode}/>} />
    //       </Route>
    //     </Routes>
    //     </div>
        
    //   </BrowserRouter>
    // </div>
    
    <div className="App">
    <BrowserRouter>
    <div className='sidebar-container'>
      <Navbar />
      
      <Sidebar />
      </div>
      
      <div className="content-container">
      <div className="container">
        <div className="row" style={{marginTop:"-650px",marginLeft:'180px',}}>

          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route
              path="/Blog"
              element={
                <>
                  {console.log(books)}
                  {books.map((book) => (
                    <Blog
                      key={book.id}
                      book={book}
                      deleteBook={deleteBook}
                      editBook={editBook}
                    />
                  ))}
                </>
              }
            />
            <Route
              path="/CreateBook"
              element={
                <CreateBook
                  user={user}
                  setbooks={setbooks}
                  setuser={setuser}
                  editBook={editBook}
                  editmode={editmode}
                  seteditmode={seteditmode}
                />
              }
            />
          </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
  </div>
); 
  
}

export default App;
