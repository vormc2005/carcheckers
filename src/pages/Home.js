import React, {Fragment} from 'react'
import Layout from '../core/Layout'
import WhyUs from '../components/WhyUs'
import PackageComponent from '../components/PackageComponent';

/**
 *******************************Home component, needs packages, why us****************  */

function Home() {
    const header1 = "Would you knowingly purchase vehicle that have been in accident? Would you want to know as much information about the car you are purchasing?";
   
    
    
    const header2 = "Our goal is to find out as much information about your next vehicle as posiible, so you can make right decision!"
    
    return (
        <Fragment>
       
            <Layout       
                        title ='CARCHECKERS' 
                        description='Pre-purchase inspection for your future vehicle.' className='container-fluid '>
                                 <hr/>
                                <WhyUs />  
                                <hr/>                 

                                <PackageComponent />          
            
            </Layout>
       </Fragment>
    )
}

export default Home
