import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class ListingApi extends Component {
    constructor(props){
        super(props)

        this.state={
            restList:''
        }
    }
    
    render(){
        return(
           <div className="row">
               <div id="mainListing">
                    <div id="filter">
                        <center>
                            <h3>Filters</h3>    
                        </center>
                    </div>
                    <ListingDisplay listData={this.state.restList}/>
                </div>
           </div>
        )
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get(`${url}${id}`)
        .then((res) => { this.setState({restList:res.data}) })
    }
}

export default ListingApi