import React, {useReducer} from 'react';
import InquiryContext from './inquiryContext';
import inquiryReducer from './inquiryReducer';



import {
    ADD_INQUIRY,
    GET_INQUIRIES,
    DELETE_INQUIRY,
    UPDATE_INQUIRY,
    FILTER_INQUIRIES,
    CLEAR_FILTER, 
    SET_ALERT,
    REMOVE_ALERT,
    SET_SHOWMESSAGE,
    CLEAR_SET_MESSAGE, 
    SET_REPLY_CLICKED,
    CLEAR_REPLY,
    SET_SERVICE_TYPE, 
    
} from '../types'

const InquiryState = props=>{

    const initialState ={
        inquiries: [
            {
                id:1,
                name: "Jill Johnson",
                subject:"I need Honda",
                email: "Jill@gmail.com",
                phone: "111-111-1111",
                year:"1999",
                make:"Honda",
                model:"Accord",
                trim:"Ex",
                comments:"Find my car!",
                serviceprice: "139", 
                type:"Basic"

            },
            {
                id:2,
                name: "Brian Petersen",
                subject:"I need Toyota",
                email: "Brian@gmail.com",
                phone: "222-222-2222",
                year:"1999",
                make:"Toyota",
                model:"Camry",
                trim:"EXL",
                comments:"Find my Toyota!",
                serviceprice: "169", 
                type:"Great"

            },
            {
                id:3,

                name: "David Backham",
                subject:"I need Rolls-Royce",
                email: "db@gmail.com",
                phone: "333-333-3333",
                year:"1999",
                make:"Rolse",
                model:"Phantom",
                trim:"Best one",
                comments:"Find my Rolls!",
                serviceprice: "199", 
                type:"Best"

            }


        ] ,
        showMessage: null,
        filtered: null,
        replyClicked: null,
        cost: null,
        serviceType: {
            price: null,
            servicetype: null
        }
        
        
      
       
    };

    // Need to get state from card and link it to request*****************************

    const [state, dispatch] = useReducer(inquiryReducer, initialState)
    
  
// Setcurrent contact from inquiry form


    //ADD inquiries
const addInquiry = inquiry=>{
    dispatch({type:ADD_INQUIRY, payload: inquiry})
}

   
    //View One Inquiry

    
    //Delete Inquiry
    const deleteInquiry = id=>{
   
        dispatch({type:DELETE_INQUIRY, payload:id})
    }
    //Send Email
  
    //set show message
    const setMessage = (boolValue)=>{
        dispatch({type:SET_SHOWMESSAGE, payload: boolValue})
    }
    //clear message
    const clearMessage = ()=>{
        dispatch({type: CLEAR_SET_MESSAGE})
    }
    //clear filter
    const clearFilter = ()=>{
        
        dispatch({type:CLEAR_FILTER})
    }
    //filter inquiriies
    const filterInquiries = text=>{
   
        dispatch({type:FILTER_INQUIRIES, payload:text})
    }    
   
    //set reply_clicked
    const setReply = (boolValue)=>{
        dispatch({type:SET_REPLY_CLICKED, payload: boolValue})
    }
     //clear filter
     const clearReply = ()=>{
        
        dispatch({type:CLEAR_REPLY})
    }
    //Set Service type
    const setServiceType = (cardData)=>{
        dispatch({type:SET_SERVICE_TYPE, payload: cardData})
    }
    //Clear Service Type
   
return (
    <InquiryContext.Provider value={{
        inquiries: state.inquiries, 
        showMessage: state.showMessage,
        filtered: state.filtered,
        curren: state.current,
        replyClicked: state.replyClicked,
        serviceType: state.serviceType,
        addInquiry,
        setMessage,
        clearMessage, 
        filterInquiries, 
        clearFilter,
        deleteInquiry,
        clearReply,
        setReply,
        setServiceType      
       
        
    }}>
       
        {props.children}
    </InquiryContext.Provider>
);

};

export default InquiryState;



