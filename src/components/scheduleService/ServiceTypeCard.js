import React, {useContext} from 'react';


const ServiceTypeCard = ({serviceType}) => {

    const {price, servicetype}= serviceType

       return (
        <div className="card" style={{textAlign:'center'}}>         
            {price === null ? 
                <div>No service was selected</div> :
    
            <ul>
            
                <li>Service chosen: {servicetype}  </li>
                <li>Price: ${price}</li>
            
            </ul>
            }
        
     </div>
    )
}

export default ServiceTypeCard
  