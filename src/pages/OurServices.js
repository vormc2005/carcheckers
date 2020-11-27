import React from 'react';
import OurServicesCard from '../components/OuServiceCard';
import PackagesDescription from "../packages_files/packagesDescription.json";

import Layout from '../core/Layout'

function OurServices() {
    return (
        <Layout title ='CARCHECKERS' description='Please choose service that fits your needs' className='container-fluid'>
         
          
            
         {PackagesDescription.map((servicePackage)=>{
             return(
                <OurServicesCard key={servicePackage.id} servicePackage={servicePackage} />

             )
         })}  

         <div className="disclosures">
            <p>*All services provided by CARCHECHEKERS carry the consulting character. Though we strive to find all of the potential issues, CARCHECKERS will not be able and not responsible for detecting any invisible, hidden issues, issues that appear intermittently, issues that can not be detected with our scanners and our equipment, issues that require removal of vehicle components to be found and detected. Condition report that is prepared for each vehicle, should be considered as additional information that gives the customer more information about the vehicle of their choice. </p>
         </div>

       </Layout>
    )
}

export default OurServices
