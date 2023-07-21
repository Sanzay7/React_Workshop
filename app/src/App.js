import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [Books,setBooks] = useState([])
  // const [loading, setLoading] = useState(true);
  useEffect( () => {
     axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=oZ0RJr1hqmfXJtCBIb1aQG8GBIRuqS0I").then(res=>{
    console.log(res.data);
    setBooks(res.data.results.lists)


   }).catch(err=>console.log(err))
 
  },[])

  return (
    <div className="container">
      <h1>BOOK LISTING APP</h1>
      <br/>
      {/* {loading ? "Loading......" : ""} */}
      {Books.map((book,key)=>
      
        <div className='row'>
          <h3><mark>{book.display_name}</mark></h3>
          {/* <div className='col'> */}
            {book.books.map((_book,key)=>{
              return <div className='col-md-4'>
                <br/>
                <img src= {_book.book_image}/>
                <h6>Title: {_book.title}</h6>
                <h6>Author: {_book.author}</h6>
                <h6>Publisher: {_book.publisher}</h6><br/><br/>
                </div>
            }
            )}
            {/* </div> */}
          </div>
      )}
    </div>
  );
}

export default App;
