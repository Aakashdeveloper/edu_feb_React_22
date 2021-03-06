import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../Header';

const url = "http://zomatoajulypi.herokuapp.com/menuItem";
const orderUrl = "http://localhost:9870/orders"

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[0]:'',
            phone:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[2]:'',
            email:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[1]:'',
            address:'Hno21',
            cost:0,
            menuItem:''

        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menuId')
        console.log(obj)
        fetch(orderUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push('/viewOrder'))
        .then(console.log("Order Added"))

    }

    renderItems = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <>
            <Header/>
            <div className="container">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Your Order for Restaurants {this.state.hotel_name}</h3>
                    </div>
                    <div className="panel-body">
                        <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                        <input type="hidden" name="cost" value={this.state.cost}/>
                        <input type="hidden" name="id" value={this.state.id}/>
                        <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <label>Name</label>
                                    <input className="form-control" name="name" value={this.state.name}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone" value={this.state.phone}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Email</label>
                                    <input className="form-control" name="email" value={this.state.email}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Address</label>
                                    <input className="form-control" name="address" value={this.state.address}
                                    onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        {this.renderItems(this.state.menuItem)}
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Cost is Rs.{this.state.cost}</h2>
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-success" onClick={this.handleSubmit}
                                type="submit">
                                    CheckOut
                                </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>

            </div>
            </>
        )
    }

    componentDidMount(){
        let menuItem = sessionStorage.getItem('menuId');
        let orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })

        fetch(url,{
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice+parseInt(item.menu_price)
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }
}


export default PlaceOrder