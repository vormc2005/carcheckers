import React, {Fragment, useContext} from 'react'
import InquiryItem from '../core/inquiry/InquiryItem';
import InquiryContext from '../context/inquiries/inquiryContext'
import Layout from '../core/Layout'


const Inquiries = () => {

    const inquiryContext = useContext(InquiryContext);
    // console.log(inquiryContext)
    const {inquiries} = inquiryContext
    // console.log(inquiries)
    return (
        <Fragment>
            <Layout  title ='CARCHECKERS' 
                description='Contact page' 
                className='container-fluid '>

                {inquiries.map((inquiry)=>{
                 return(
                       <InquiryItem key={inquiry.id} inquiry={inquiry}/> 
                 )
                })}            

            </Layout>
        </Fragment>
    )
}

export default Inquiries
