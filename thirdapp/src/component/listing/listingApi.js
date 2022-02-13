import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cusinieFilter'
import CostFilter from '../filters/costFilter';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class ListingApi extends Component {
    constructor(props){
        super(props)

        this.state={
            restList:''
        }
    }

    setDataAsPerFilter=(data) => {
        this.setState({restList:data})
    }
    
    render(){
        return(
           <div className="row">
               <div id="mainListing">
                    <div id="filter">
                        <center>
                            <h3>Filters</h3>  
                        </center>
                        <CuisineFilter mealId={this.props.match.params.id}
                        restDataPerCuisine = {(data)=>{this.setDataAsPerFilter(data)}}/>  
                        <CostFilter mealId={this.props.match.params.id}
                        restDataPerCost = {(data)=>{this.setDataAsPerFilter(data)}}/>  
                    </div>
                    <ListingDisplay listData={this.state.restList}/>
                </div>
           </div>
        )
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        sessionStorage.setItem('pageId',id)
        axios.get(`${url}${id}`)
        .then((res) => { this.setState({restList:res.data}) })
    }
}

export default ListingApi