import React, {Fragment, useContext, useEffect} from 'react'
import InquiryItem from '../components/inquiry/InquiryItem';
import InquiryContext from '../context/inquiries/inquiryContext'
import Layout from '../core/Layout';
import InquiryFilter from "../components/inquiry/InquiryFilter";




/**
 * *********************Inquiries page, displays all of inquiries*********************************
 * ********************* Can only be accessed with admin login, copy of inquiry needs to be kept in second DB and e-mail****************
 */


const Inquiries = () => {

    const inquiryContext = useContext(InquiryContext);
    // console.log(inquiryContext)
    const {inquiries, showMessage, filtered, getInquiries, loading} = inquiryContext
    // console.log(inquiries)


    useEffect(()=>{
        getInquiries()
        //eslint-disable-next-line
    }, [])

    if(inquiries.length === 0){
        return (
           
             <Fragment>
             <Layout  title ='CARCHECKERS' 
                 description='Contact page' 
                 className='container-fluid '>
                  
                
                 <div className="col-md-12">
 
                 <div>
                <h2>No messages</h2>
            </div>
                 </div>
 
                 {/* Test for adding function */}
                 {/* <div className="col-md-12">
                 <Form/>
                 </div> */}
 
                
 
             </Layout>
         </Fragment>
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
                {/* <div className="col-md-12">
                <Form/>
                </div> */}

               

            </Layout>
        </Fragment>
    )
}

export default Inquiries
