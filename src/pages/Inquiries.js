import React, {Fragment, useContext} from 'react'
import InquiryItem from '../components/inquiry/InquiryItem';
import InquiryContext from '../context/inquiries/inquiryContext'
import Layout from '../core/Layout';
import InquiryFilter from "../components/inquiry/InquiryFilter"
import Form from "../components/scheduleService/ScgeduleService2"


const Inquiries = () => {

    const inquiryContext = useContext(InquiryContext);
    // console.log(inquiryContext)
    const {inquiries, showMessage, filtered} = inquiryContext
    // console.log(inquiries)

    if(inquiries.length === 0){
        return (
            <div>
                <h2>No messages</h2>
            </div>
        )
       
    }

    return (
        <Fragment>
            <Layout  title ='CARCHECKERS' 
                description='Contact page' 
                className='container-fluid '>
                 
                <InquiryFilter/>  
                <div className="col-md-12">

                {filtered !== null ?  filtered.map((inquiry)=>{
                        return(
                            <InquiryItem key={inquiry.id} inquiry={inquiry} showMessage={showMessage} /> 
                 )
                }):inquiries.map((inquiry)=>{
                    return(
                        <InquiryItem key={inquiry.id} inquiry={inquiry} showMessage={showMessage} /> 
             )
            })

            }  
                </div>

                {/* Test for adding function */}
                <div className="col-md-12">
                <Form/>
                </div>

               

            </Layout>
        </Fragment>
    )
}

export default Inquiries
