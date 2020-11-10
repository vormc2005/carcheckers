import React, {useEffect} from 'react';
import M from 'materialize-css';





function Parallax({title, image, description}) {

    useEffect(() => {
        let elements =  document.querySelectorAll('.parallax');
      M.Parallax.init(elements);
    }, [])

    

    return (
        
        <div className='parallax-container  mb-5' style={{height: "50vh"}}>
            
           <div className="parallax">
               <img src={image} alt="vehicle" style={{width:"100%", height:"100vh"}}/>
               
           </div>
           <div className="logo-description">
                <div className="logo" >
                    <h2 className="mt-3 logo">{title}</h2>
                    <span ><i className="fas fa-copyright fa-xs " ></i></span>        

                </div>
               <h3 style={{color:"white", marginTop:"2vh"}}>{description}</h3>
               
           </div>
        </div>
       

    
    )
}

export default Parallax
