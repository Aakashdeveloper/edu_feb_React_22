import React from 'react'
import ReactDOM from 'react-dom'
import StockList from './component/stockList';
import UserList from './component/userList';
import Hoc from './component/Hoc';

const StocksData = [
    {
        id: 1,
        name: 'TCS'
          
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ];

const UsersData = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
  ];

const StockComponent = Hoc(StockList,StocksData)
const UserComponent = Hoc(UserList,UsersData)

const App = () => {
    return(
        <>
            <StockComponent/>
            <UserComponent/>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))