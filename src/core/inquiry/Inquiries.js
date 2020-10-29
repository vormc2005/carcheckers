import React, {Fragment, useContext} from 'react'
import InquiryItem from './InquiryItem';
import InquiryContext from '../../context/inquiries/inquiryContext'

const Inquiries = () => {

    const inquiryContext = useContext(InquiryContext);
    console.log(inquiryContext)
    const {inquiries} = inquiryContext
    // console.log(inquiries)
    return (
        <Fragment>
            {inquiries.map((inquiry)=>{
                return(
                    <InquiryItem key={inquiry.id} inquiry={inquiry}/> 
                )
            })}            

           
        </Fragment>
    )
}

export default Inquiries
