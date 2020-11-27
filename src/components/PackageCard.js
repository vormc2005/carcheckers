import React, {Fragment,  useState, useContext} from 'react'
import { Link} from 'react-router-dom';
import InquiryContext from '../context/inquiries/inquiryContext';

/**
 * *************************************
 * ********************* Package card, shows available packages. Upon click it needs to take user to a from where user can fillout request, and *************************send request to MongoDB and e-mail
 */

const PackageCard = ({item}) => {

   const inquiryContext = useContext(InquiryContext)
   const {setServiceType}= inquiryContext



   const {id, name, description, price, services}= item;      
  //set state ccost and package name 
   const onOrder =(e)=>{
       e.preventDefault()     
      setServiceType({
          price:price,
          type:name
      })
   }
    
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
                <small className="smallFont" >/per vehicle</small>
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
    <div className="package-link-description">
            <Link rel="stylesheet" to="/ourservices">More Information </Link>
        </div>
        <div className="card-bottom" >
            <button 
                className="btn btn-danger mt-3" onClick={onOrder}>
                    <Link style={{textDecoration:"none", color:'white'}} to="/scheduleservice" >Order Inspection</Link>
                  
            </button>
        </div>       
    </div>
    
 </Fragment>    

    )
}

export default PackageCard
