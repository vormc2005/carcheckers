import React, {Fragment} from 'react';


const OuServiceCard = ({servicePackage}) => {

const {name, image, description, goodFor, services} = servicePackage
    return (
        <Fragment>
        <div className="grid-container">
            <div className="grid-item image-class">
                <img id="service-image" src={image} alt=""/>
            </div>
            <div className="grid-item text">
                <h1>{name}</h1>
                <h2>{description}</h2>
                <h4>{goodFor}</h4>
                <dl>
            {services.map((service, i)=>{
                 return(
                        <li className="service-li-items">{service}</li>
                        )
       })}        
        </dl>

            </div>
       
    </div>
     <hr></hr>
     </Fragment>
    )
}

export default OuServiceCard
