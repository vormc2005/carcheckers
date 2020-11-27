import React, {Fragment, useContext, useEffect} from 'react'
import InquiryItem from '../components/inquiry/InquiryItem';
import InquiryContext from '../context/inquiries/inquiryContext'
import Layout from '../core/Layout';
import InquiryFilter from "../components/inquiry/InquiryFilter";
import Form from "../components/scheduleService/ScgeduleService2";


/**
 * *********************Inquiries page, displays all of inquiries*********************************
 * ********************* Can only be accessed with admin login, copy of inquiry needs to be kept in second DB and e-mail****************
 */


const ScheduleService = () => {

    const inquiryContext = useContext(InquiryContext);
    // console.log(inquiryContext)
    

    
   

    return (
        <Fragment>
            <Layout  title ='CARCHECKERS' 
                description='Contact page' 
                className='container-fluid '>              
              
             

                {/* Test for adding function */}
                <div className="col-md-12">
                <Form/>
                </div>

               

            </Layout>
        </Fragment>
    )
}

export default ScheduleService
