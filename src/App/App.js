import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Panel from '../Panel/Panel';
import Add from '../Add/Add';
import Reviews from '../Reviews/Reviews'
// import Context from './Context'
// import { render } from '@testing-library/react';

function App() {
    
  // const REVIEWS = [
  //   {
  //     user_name: 'lorem',
  //     title: 'lorem', 
  //     author: 'lorem', 
  //     rating: 5, 
  //     content: 'lorem lorem lorem', 
  //     timestamp: 'lorem lorem lorem'
  //   },
  //   {
  //     user_name: 'ipsum',
  //     title: 'ipsum', 
  //     author: 'ipsum', 
  //     rating: 4, 
  //     content: 'ipsum ipsum ipsum', 
  //     timestamp: 'ipsum ipsum ipsum'
  //   },
  //   {
  //     user_name: 'loremipsum',
  //     title: 'loremipsum', 
  //     author: 'loremipsum', 
  //     rating: 2, 
  //     content: 'loremipsum loremipsum loremipsum', 
  //     timestamp: 'loremipsum loremipsum loremipsum'
  //   }
  // ];
  
  
  // handleAddReview = review => {
  //   this.setState({
  //     reviews: [
  //       ...this.state.reviews,
  //       review
  //     ]
  //   })
  // }

  
  // const value = {
  //   reviews: this.state.reviews,
  //   addReview: this.handleAddReview,
  // }
 

  return (
    // <Context.Provider value={value}>
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1>Born To Read</h1>
        </header>
          <main>
            <Route>
              <Route 
                exact path="/" 
                component={Home}/>
              <Route 
                path="/about" 
                component={About}/>
              <Route 
                path="/signup" 
                component={SignUp}/>
              <Route 
                path="/signin"
                component={SignIn}
                />
              <Route 
                path="/panel" 
                component={Panel}/>
              <Route 
                path="/add" 
                component={Add}/>
              <Route 
                path="/reviews" 
                component={Reviews}/>
            </Route>
          </main>
        <Footer />
      </div>
    // </Context.Provider>
    );
}
  

export default App;
