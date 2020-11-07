import React, {useContext, useRef, useEffect} from 'react'
import InquiryContext from '../../context/inquiries/inquiryContext'

const InquiryFilter = () => {

    const inquiryContext = useContext(InquiryContext);
    const {filterInquiries, filtered, clearFilter} = inquiryContext
    const text = useRef('')

    useEffect(()=>{
        if(filtered === null){
            text.current.value ='';
        }
    })

    const onChange =e=>{
        if(text.current.value !== ''){
            filterInquiries(e.target.value);
        }else{
            clearFilter();
        }
    };


    return (
        <form>
            <input 
                    ref={text} 
                    type="text" 
                    placeholder="Filter Inquiries..." 
                    onChange = {onChange}/>
        </form>
    )
}

export default InquiryFilter

