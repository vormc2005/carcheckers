import React, {useReducer} from 'react';
import InquiryContext from './inquiryContext';
import inquiryReducer from './inquiryReducer';



import {
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
    CLEAR_REPLY
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
                comments:"Find my car!"

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
                comments:"Find my Toyota!"

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
                comments:"Find my Rolls!"

            }


        ] ,
        showMessage: null,
        filtered: null,
        replyClicked: null
       
    };

    const [state, dispatch] = useReducer(inquiryReducer, initialState)
    
  


    //Get inquiries

    
    //View One Inquiry
    
    //Edit inquiry
    
    //Delete Inquiry
    const deleteInquiry = id=>{
   
        dispatch({type:DELETE_INQUIRY, payload:id})
    }
    
    //set show message
    const setMessage = (boolValue)=>{
        dispatch({type:SET_SHOWMESSAGE, payload: boolValue})
    }
    //clear message
    const clearMessage = (boolValue)=>{
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

return (
    <InquiryContext.Provider value={{
        inquiries: state.inquiries, 
        showMessage: state.showMessage,
        filtered: state.filtered,
        curren: state.current,
        replyClicked: state.replyClicked,
        setMessage,
        clearMessage, 
        filterInquiries, 
        clearFilter,
        deleteInquiry,
        clearReply,
        setReply
        
       
        
    }}>
       
        {props.children}
    </InquiryContext.Provider>
);

};

export default InquiryState;



