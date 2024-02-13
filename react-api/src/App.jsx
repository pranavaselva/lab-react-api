import { useEffect, useState } from "react";
import axios from 'axios';



function App(){

  const [state, setState] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})

    .then(res  => {
      const books = res.data.books
      setState(books)
      console.log(books)
    })

    .catch( error => {
      if(error.res.status == 404){
        console.log("Status Code: 404")
        console.log("Website not found")
      }
    })
  },[])

  return(
    <div>
      {
        state.map(function(element, index){
          return(
            <div>
              <h1>
                {element.title}
              </h1>
              <div className="container">
                <img src={element.imageLinks.smallThumbnail} alt={element.title} />
                <p>{element.description}</p>
              </div>
              <div>
                <h3>{element.authors}</h3>

              </div>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default App;