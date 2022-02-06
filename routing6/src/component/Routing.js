import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from './Header';
import PostDetails from './PostDetail'

const Routing = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="home" element={<Home/>} />
                        <Route path="post" element={<Post/>} />
                        <Route path="post/:topic" element={<PostDetails/>} />
                        <Route path="profile" element={<Profile/>} />
                        <Route path="*"
                            element={
                                <main style={{padding:'2px'}}>
                                    <p>There is nothing here</p>
                                </main>
                            }>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing

