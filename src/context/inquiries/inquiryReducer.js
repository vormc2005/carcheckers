import {
    ADD_INQUIRY,
    DELETE_INQUIRY,
    FILTER_INQUIRIES,
    CLEAR_FILTER, 
    SET_SHOWMESSAGE,
    CLEAR_SET_MESSAGE,
    SET_REPLY_CLICKED,
    CLEAR_REPLY, 
    SET_SERVICE_TYPE,
   
   
} from '../types'


export default (state, action)=>{
    switch(action.type){
        case ADD_INQUIRY:
            return {
                ...state,
                inquiries:[...state.inquiries, action.payload]
            }
            return
        case SET_SHOWMESSAGE:
            return{
                ...state,
                showMessage: true
            }
        case CLEAR_SET_MESSAGE:
            return {
                ...state,
                showMessage: null
            }
        case FILTER_INQUIRIES:
            return{
                ...state,
                        filtered: state.inquiries.filter(inquiry=>{
                            const regex = new RegExp(`${action.payload}`, 'gi');
                            return inquiry.name.match(regex) || inquiry.phone.match(regex) || inquiry.make.match(regex)  
                        })
            }
        case CLEAR_FILTER:
            return{
               ...state, 
                 filtered: null
        };
        case DELETE_INQUIRY: 
        return{
            ...state, 
            inquiries: state.inquiries.filter(inquiry =>inquiry.id !== action.payload)
        }
        case SET_REPLY_CLICKED:
            return{
                ...state, 
                replyClicked: true
            }
        case CLEAR_REPLY:
           return{
                ...state, 
                replyClicked: null
        }
        case SET_SERVICE_TYPE:
            return {
                ...state, 
                serviceType: action.payload
            }
       
             


        default:
            return state;
    }
}