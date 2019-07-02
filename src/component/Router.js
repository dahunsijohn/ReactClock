import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../component/Auth/Login';
import Signup from '../component/Auth/Signup';


const CustomRouter = () => {
    return (
        <Router>
            {/* <Route path='/' component={}></Router> */}
            <Route path='/login/' component={Login}></Route>
            <Route path='/signup/' component={Signup}></Route>
        </Router>
    )
    
 }
 
 export default CustomRouter
 