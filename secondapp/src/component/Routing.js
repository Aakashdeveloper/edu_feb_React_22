import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import PostDetails from './PostDetail'

const Routing = () => {
    return(
        <BrowserRouter>
            <div className="container">
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/post" component={Post}/>
                    <Route path="/post/:topic" component={PostDetails}/>
                    <Route path="/profile" component={Profile}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing

