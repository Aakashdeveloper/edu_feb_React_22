import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import Home from './component/home/Home';
import NotFound from './notFound';
import Listing from './component/listing/listingApi';
import Details from './component/details/resDetails';
import PlaceOder from './component/orders/placeOrder';
import ViewOrder from './component/orders/viewOrder';
import Login from './component/login/Login';
import Register from './component/login/Register'

const Routing = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:id" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOder}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing