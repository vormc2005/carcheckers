import React, {Fragment} from 'react'
import NavbarAppComponent from './Navbar'


function Layout({title="Title", description="Welcome to carsearchers", className, children}) {
    return (
       <Fragment>
           <NavbarAppComponent/>
           <div>
            <div className='jumbotron'>
                <h2 className="mt-3">{title}</h2>
                <p className="lead">{description}</p>
                <br/>   
              
            </div>
           
            {/* Any content that is under the jumbotron */}
            <div className={className}>
                {children}
            </div>
           
        </div>
       </Fragment>
        
    )
}

export default Layout
