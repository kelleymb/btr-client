import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SignUp from '../SignUp/SignUp';
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
            {/* path="/" NEEDS MORE! */}
            <Route 
              path="/" 
              component={App}>
              <Route 
                path="/about" 
                component={About}/>
              <Route 
                path="/signup" 
                component={SignUp}/>
              <Route 
                path="/panel" 
                render={() => (
                  <Panel reviews={REVIEWS.map(rev => 
                    <section>
                      <p>User: {rev.user_name}</p>
                      <p>Title: {rev.title}</p>
                      <p>Author: {rev.author}</p>
                      <p>Rating: {rev.rating}</p>
                      <p>Content: {rev.content}</p>
                      <p>Timestamp: {rev.timestamp}</p>
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
                      <p>User: {rev.user_name}</p>
                      <p>Title: {rev.title}</p>
                      <p>Author: {rev.author}</p>
                      <p>Rating: {rev.rating}</p>
                      <p>Content: {rev.content}</p>
                      <p>Timestamp: {rev.timestamp}</p>
                    </section>)}
                  />
                )}
              />
              {/* <Route 
                path="/reviews" 
                component={Reviews}/> */}
            </Route>
          </main>
        <Footer />
      </div>
    );
}
  

export default App;
