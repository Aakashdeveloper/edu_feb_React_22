import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super()

        this.state={
            heading:'Developer Funnel',
            keyword:'User Input Here'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
    }

    render(){
        console.log("inside render")
        return(
            <div>
                <header>
                    <div className="logo">{this.state.heading}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </div>
        ) 
    }
}

export default Header;