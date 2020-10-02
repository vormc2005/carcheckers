import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./core/Home"
import ScheduleService from "./core/ScheduleService"
import Contactus from "./core/Contactus"
import OurServices from "./core/OurServices"


function Routes() {
    return (

        
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ourservices" exact component={OurServices} />
                <Route path="/contactus" exact component={Contactus} />
                <Route path="/scheduleservice" exact component={ScheduleService} />

            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes

