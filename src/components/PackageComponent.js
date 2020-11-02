import React from 'react';
import packages from "../packages_files/packages.json"
import PackageCard from './PackageCard';

const PackageComponent = () => {

    return (
        <div style={{textAlign:'center'}}>
            <h2 className="mt-5">
                Our Packages
            </h2>
            

            {packages.map((item)=>{
                   return(
                         <PackageCard key={item.id} item={item}/> 
                   )
                  })}            
        </div>

        
    )
}

export default PackageComponent
