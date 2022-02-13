import React,{ Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const lurl = "https://zomatoajulypi.herokuapp.com/location";
const rurl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {
    constructor(props){
        super(props)
        // console.log(">>> inside constructor")
        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        // console.log(">>>>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        } 
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        } 
    }

    handleCity = (event) => {
        fetch(`${rurl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({restaurant:data})
        })
    }

    handleRestaurant = (event) => {
        this.props.history.push(`/details?restId=${event.target.value}`)
    }

    render(){
        console.log(">>> props in search",this.props)
        return(
            <div className="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>---SELECT Location-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select onChange={this.handleRestaurant}>
                        <option>---SELECT Restaurants-----</option>
                        {this.renderRestaurants(this.state.restaurant)}
                    </select>
                </div>
            </div>
        )
    } 

    //api calling on page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        //return the promise
        .then((res) => res.json())
        //return the data
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default withRouter(Search);