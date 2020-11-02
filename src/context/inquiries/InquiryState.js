import React, {useReducer} from 'react';
import InquiryContext from './inquiryContext';
import inquiryReducer from './inquiryReducer';



import {
    GET_INQUIRIES,
    DELETE_INQUIRY,
    UPDATE_INQUIRY,
    CLEAR_CURRENT,
    FILTER_INQUIRIES,
    CLEAR_FILTER, 
    SET_ALERT,
    REMOVE_ALERT
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


        ] 
       
    };

    const [state, dispatch] = useReducer(inquiryReducer, initialState)
    
  


    //Get inquiries

    //View One Inquiry

    //Edit inquiry

    //Delete Inquiry

return (
    <InquiryContext.Provider value={{
        inquiries: state.inquiries, 
       
        
    }}>
       
        {props.children}
    </InquiryContext.Provider>
);

};

export default InquiryState;



