import React, {Fragment} from 'react'
import NavbarAppComponent from './Navbar'
import Parallax from "./Parallax"


/**
 * 
 * Main layout 
 */


function Layout({title="Title", description="Welcome to carsearchers", className, children}) {

    const backgroundImage = "./images/audi.png"


    return (
       <Fragment>
            <NavbarAppComponent/>  
       
        <div>
          
            <div className='topPart ' style={{textAlign:"center"}}>
                <Parallax image={backgroundImage} description={description} title={title}
                >                    
                </Parallax>
               
                 
            </div>
           
           
            
            <div className={className}>
                {children}
            </div>           
        </div>
       </Fragment>
        
    )
}

export default Layout
