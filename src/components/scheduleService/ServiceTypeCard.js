import React, {useContext} from 'react';

//*****************************************************
//************************************************
// ***************card that shows price and type of the service that was selected.
//*********************** data goes to inquiries database */ */ */
const ServiceTypeCard = ({serviceType}) => {

    const {price, type}= serviceType

       return (
        <div className="card" style={{textAlign:'center'}}>         
            {price === null ? 
                <div>No service was selected</div> :
    
            <ul>
            
                <li>Service chosen: {type}  </li>
                <li>Price: ${price}</li>
            
            </ul>
            }
        
     </div>
    )
}

export default ServiceTypeCard
  