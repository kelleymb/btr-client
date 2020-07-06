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

function App() {
    
  const REVIEWS = [
    {
      user_name: 'lorem',
      title: 'lorem', 
      author: 'lorem', 
      rating: 5, 
      content: 'lorem lorem lorem', 
      timestamp: 'lorem lorem lorem'
    },
    {
      user_name: 'ipsum',
      title: 'ipsum', 
      author: 'ipsum', 
      rating: 4, 
      content: 'ipsum ipsum ipsum', 
      timestamp: 'ipsum ipsum ipsum'
    },
    {
      user_name: 'loremipsum',
      title: 'loremipsum', 
      author: 'loremipsum', 
      rating: 2, 
      content: 'loremipsum loremipsum loremipsum', 
      timestamp: 'loremipsum loremipsum loremipsum'
    }
  ];

  return (
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
                render={() => (
                  <Panel reviews={REVIEWS.map(rev => 
                    <section>
                      <h4>User: {rev.user_name}</h4>
                      <h4>Title: {rev.title}</h4>
                      <h4>Author: {rev.author}</h4>
                      <h4>Rating: {rev.rating}</h4>
                      <h4>Content: {rev.content}</h4>
                      <h4>Timestamp: {rev.timestamp}</h4>
                    </section>)}
                  />
                )}
              />
              <Route 
                path="/add" 
                component={Add}/>
              <Route 
                path="/reviews" 
                render={() => (
                  <Reviews reviews={REVIEWS.map(rev => 
                    <section>
                      <h4>User: {rev.user_name}</h4>
                      <h4>Title: {rev.title}</h4>
                      <h4>Author: {rev.author}</h4>
                      <h4>Rating: {rev.rating}</h4>
                      <h4>Content: {rev.content}</h4>
                      <h4>Timestamp: {rev.timestamp}</h4>
                    </section>)}
                  />
                )}
              />
            </Route>
          </main>
        <Footer />
      </div>
    );
}
  

export default App;
