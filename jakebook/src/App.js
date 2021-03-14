import React from 'react';
import './style.css';

//import logo from './images/';
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'

const App = () => {
  return (
   <div className="app-container">
     <header>
       <h1>Jakebook</h1>
     </header>
     <div className="content-container">

        <div className="form-container">
          <Form />
        </div>

        <div className="posts-container">
          <Posts />
        </div>
        
     </div>
   </div>
  )
}

export default App;