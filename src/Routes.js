import React from 'react'
import './Routes.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import ScheduleService from "./pages/ScheduleService"
import Contactus from "./pages/Contactus"
import OurServices from "./pages/OurServices"
import Inquiries from "../src/pages/Inquiries"
import InquiryState from './context/inquiries/InquiryState';


function Routes() {
    return (

        <InquiryState>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ourservices" exact component={OurServices} />
                <Route path="/contactus" exact component={Contactus} />
                <Route path="/scheduleservice" exact component={ScheduleService} />
                <Route path="/inquiries" exact component={Inquiries} />


            </Switch>
        
        </BrowserRouter>
        </InquiryState>
    )
}

export default Routes

