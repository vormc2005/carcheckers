import React, {Fragment, useContext} from 'react'



const PackageCard = ({item}) => {

   const {id, name, description, price, services}= item;       
    
    return (
<Fragment>
   

    
    <div className="card packages" >
    <div className="card-body">
        <div style={{textAlign:"center", marginBottom:"2vh"}}>

        <h5 className="card-title">
            {name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
            {description}
        </h6>
        <h1 
            className="mt-4 mb-2">
                ${price} 
            <span>
                <small className="smallFont" style={{fontSize:"2vh"}}>/per vehicle</small>
            </span>
        </h1>
        </div>
        <dl>
            {services.map((service, i)=>{
                 return(
                        <li>{service}</li>
                        )
       })}        
        </dl>
       
    </div>
    <div className="package-link-description" style={{textAlign:'center', bottom:"0px"}}>
            <link rel="stylesheet" href=""/>Link
        </div>
        <div className="card-bottom" style={{height:"5vh", backgroundColor:'blue', textAlign:"center"}}>
            <button 
                className="btn btn-danger mt-3" >
                    Order Inspection
            </button>
        </div>       
    </div>
    
 </Fragment>    

    )
}

export default PackageCard
