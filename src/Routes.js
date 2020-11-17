import React from 'react'
import './Routes.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import ScheduleService from "./pages/ScheduleService"
import Contactus from "./pages/Contactus"
import OurServices from "./pages/OurServices"
import Inquiries from "../src/pages/Inquiries"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import setAuthToken from './utils/setAuthToken'
// import Alerts from './core/Alert'

import InquiryState from './context/inquiries/InquiryState';
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState"


if(localStorage.token){
    setAuthToken(localStorage.token);
}


function Routes() {
    return (
        <AuthState>
        <InquiryState>
            <AlertState>
        <BrowserRouter>
                {/* <Alerts/> */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ourservices" exact component={OurServices} />
                <Route path="/contactus" exact component={Contactus} />
                <Route path="/scheduleservice" exact component={ScheduleService} />
                <Route path="/inquiries" exact component={Inquiries} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />

            </Switch>
        
        </BrowserRouter>
        </AlertState>
        </InquiryState>
        </AuthState>
    )
}

export default Routes

