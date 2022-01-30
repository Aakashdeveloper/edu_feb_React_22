import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductComponent'
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            prodData:JSON
        }
    }

    render(){
        return (
            <div>
              <Header/>
              <ProductDisplay dispData={this.state.prodData}/>
              <Footer year="2022" month="Jan"/>
            </div>
          )
    }
  
}

export default Home


