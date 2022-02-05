import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductComponent'
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            prodData:JSON,
            filterData:JSON 
        }
    }

    /*
        var a = [3,6,8,3,5,9,10,2]
        a.filter((data) => {return data>5})
    */
    filterData = (keyword) => {
        var output = this.state.prodData.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })

        this.setState({filterData:output})

    }

    render(){
        return (
            <div>
            {/* reciving the data from child*/}
              <Header userText={(userInput) => {this.filterData(userInput)}}/>
              <ProductDisplay dispData={this.state.filterData}/>
              <Footer year="2022" month="Jan"/>
            </div>
          )
    }
  
}

export default Home


