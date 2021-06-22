import React, {useState,useEffect} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import Search from './routes/Search';


const App = () => {
  const [state, setState]=useState({
    shelves:[{
            id:"currentlyReading",
            title:"Currently Reading"
            },
          {
            id:"wantToRead",
            title:"Want to Read"
          },
          {id:"read",
          title:"Read"
            }
          ],
    books:[]
  });

//function to get books from API :
useEffect(() => {
BooksAPI.getAll()
    .then(allBooks => (
      setState(currState =>({...currState,
        books:allBooks})
        )
    ));
      },[state.books])


return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} render={() => <Home shelves={state.shelves} allBooks={state.books}/>}/>
            <Route exact path={'/search'} render={() => <Search allBooks={state.books} choosenBefore={state.books}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  
}

export default App;


