import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Dashboard from '../Dashboard/Dashboard';
import Add from '../Add/Add';
import Reviews from '../Reviews/Reviews';
import './App.css';

function App() {
  
  return (
      <div className="App">
        <img alt="scenic-view-and-book" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80"></img>
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
                component={SignIn}/>
              <Route 
                path="/dashboard" 
                component={Dashboard}/>
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
  );
}
  

export default App;
