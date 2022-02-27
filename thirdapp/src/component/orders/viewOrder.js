import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../Header';

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
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //call orders api 
    componentDidMount(){
        if(this.props.location){
            let queryp = this.props.location.search;
            if(queryp){
                let data={
                    "status":queryp.split('&')[0].split('=')[1],
                    "date":queryp.split('&')[2].split('=')[1],
                    "bank_name":queryp.split('&')[3].split('=')[1]
                }
                let id = queryp.split('&')[1].split('=')[1].split('_')[1]
                fetch(`${url}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'accept':'application/json',
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(data)
                })

            }
        }
        axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;