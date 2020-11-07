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


export default (state, action)=>{
    switch(action.type){
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


        default:
            return state;
    }
}