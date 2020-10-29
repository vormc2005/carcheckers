import React, {Fragment} from 'react'
import NavbarAppComponent from './Navbar'


function Layout({title="Title", description="Welcome to carsearchers", className, children}) {
    return (
       <Fragment>
            <NavbarAppComponent/>  
       
           <div>
            <div className='jumbotron' style={{textAlign:"center"}}>
                    <div className="logo" >
                    <h2 className="mt-3 logo">{title}</h2>
                    <span ><i className="fas fa-copyright fa-xs " ></i></span>
                  

                    </div>
               
                <p className="lead mt-4 headfont">{description}</p>
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
