import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import OrderList from './components/OrderList/OrderList/OrderList';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import OrderReview from './components/OrderReview/OrderReview';
import AddServices from './components/AddServices/AddServices';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import AllServices from './components/AllServices/AllServices';
import ClientService from './components/ClientService/ClientService';
export const UserContext  = createContext()

function App() {
  const [data , setData] = useState({})
  const [loggedInUser, setLoggedInUser] = useState({})
  const [service ,setService] = useState([])
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, data, setData , service ,setService}}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/order/:id">
          <OrderList></OrderList>
        </PrivateRoute>
        <Route path="/review">
          <OrderReview></OrderReview>
        </Route>
        <Route path="/adminService">
          <AddServices></AddServices>
        </Route>
        <Route path="/addService">
          <AllServices></AllServices>
        </Route>
        <Route path="/clientService">
          <ClientService></ClientService>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
