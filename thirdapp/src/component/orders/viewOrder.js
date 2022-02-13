import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url = "http://localhost:9870/orders"

class ViewOrder extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }
    render(){
        return(
            <>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //call orders api 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;