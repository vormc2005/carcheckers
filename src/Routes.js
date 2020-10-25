import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import ScheduleService from "./pages/ScheduleService"
import Contactus from "./pages/Contactus"
import OurServices from "./pages/OurServices"


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

