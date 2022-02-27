import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Header extends Component{

    constructor(props){
        super(props)

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userData')
        this.setState({
            userData:''
        })
        this.props.history.push('/')
    }


    conditionalRender = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArr = [data.name, data.email,data.phone,data.role];
            sessionStorage.setItem('userData',outputArr)
            return(
                <>
                    <Link className="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span>
                     Hi {data.name}
                     </Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}><span className="glyphicon glyphicon-log-in"></span> 
                    Logout
                    </button>
                </>
            )
        }else{
            return(
                <>
                    <Link className="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span>
                     Sign Up
                     </Link>
                    &nbsp;
                    <Link className="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                </>
            )
                
        }
    }

    

    render(){
        return (
            <div className="header">
                <div id="brand">
                    Developer Food
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div id="social">
                    {this.conditionalRender()}
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
    
}

export default withRouter(Header);