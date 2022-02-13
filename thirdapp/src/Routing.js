import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/home/Home';
import NotFound from './notFound';
import Listing from './component/listing/listingApi';
import Details from './component/details/resDetails';
import PlaceOder from './component/orders/placeOrder';
import ViewOrder from './component/orders/viewOrder';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:id" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOder}/>
                <Route path="/viewOrder" component={ViewOrder}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing