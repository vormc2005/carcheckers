import React, {useContext, Fragment} from 'react'
import InquiryContext from '../../context/inquiries/inquiryContext'

const InquiryItem = ({inquiry}) => {

    const inquiryContext = useContext(InquiryContext)
    const {
            showMessage, 
            setMessage, 
            clearMessage, 
            filtered, 
            filterInquiries, 
            clearFilter, 
            deleteInquiry,
            setReply,
            clearReply,
            replyClicked, 
            serviceType
             
        }=inquiryContext

    const {
            id, 
            name, 
            email, 
            phone, 
            year, 
            make, 
            model, 
            trim, 
            comments, 
            subject, 
            serviceprice,
            type
        } = inquiry

    

   const switchShowMessage =  (text)=>{
      
        if(!showMessage ){

            setMessage(true)
            filterInquiries(text)
            console.log(text)
            // console.log(false)
        }
        else{
            clearMessage() 
            clearFilter()
        }
       
   }

 const messageStyle ={
    width: '70%',
    padding: "2vh",
    marginTop: '5vh',
    marginBottom: '5vh',
    marginLeft:'15%',
    textAlign:"center"

 }

 const commentsSectionStyle = {
    overflowY:"scroll",
     marginTop:"3vh",      
     height:"8vh"
 }

 const cardStyle = {
   marginBottom: "3vh", 
   

 }

 const removeInquiry = ()=>{
    deleteInquiry(id)
 }

 const onReply =()=>{
     if(replyClicked===null){         
     setReply(true)
     setTimeout(clearReply, 5000)
   
        
     }
     else if(replyClicked===true){
         clearReply()
     }
 }

 


    return (
        <Fragment>  
                {/****************************  Pop up message window******************************** */}
                {onReply}
                {showMessage && filtered &&                                            
                        <div className=" row" >
                        <div 
                            className="card col-s-10" 
                            style={messageStyle}>
                                {comments}
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fugit facere dolorem inventore, mollitia sequi, corporis, in ad non architecto sapiente commodi ratione ipsum assumenda. Assumenda eveniet adipisci ullam totam.
                                
                        </div>
                        </div>                          
                      
                }
           {/* ******************************************************************** */}
        <div className="container" >
        <div className="card bg-light col-md-12" style={cardStyle}>
            <div className="row">
                <div className="col-md-4 mt-2" style={{borderRight:"1px solid black"}}>
                <ul >
                    <li>
                      <strong>
                        {name}
                      </strong>
                    </li>
                    <li>
                        {email}
                    </li>
                    <li>
                        {phone}
                    </li>
                    <li>
                        {type}
                    </li>
                    <li>
                        {serviceprice}
                    </li>
                    
                </ul>
                </div>
                <div className="col-md-8 mt-2">
                    <div>
                      <strong>Subject:</strong>  {subject}
                    </div>
                    <div>
                   <strong>Year:</strong> {year}{' '} <strong>Make:</strong> {make}{" "} <strong>Model:</strong> {model} {' '} <strong>Trim:</strong> {trim}

                    </div>
                        <div  style={commentsSectionStyle}>

                            {comments}
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fugit facere dolorem inventore, mollitia sequi, corporis, in ad non architecto sapiente commodi ratione ipsum assumenda. Assumenda eveniet adipisci ullam totam.
                        </div>
                                
                         
                </div>         
            </div>
            <hr/>
                <div className=" row ">
                <div className="btn-group" style={{marginLeft:"auto", marginRight:"auto"}}>
                    <button 
                            style={{ width:"10vh", height:'5vh' }} 
                            className="btn btn-success btn-sm mr-2" 
                            onClick={()=>switchShowMessage(id)}>{!showMessage ? "View message" : "Clear message"}</button>
                
                   {replyClicked===null &&
                   <button
                            href={`mailto:  ${email}`}
                            style={{ width:"10vh", height:'5vh'}} 
                            className="btn btn-dark btn-sm mr-2" onClick={onReply}><a style={{textDecoration:"none", color:"white"}} href={`mailto:  ${email}`}>  Reply</a>
                    </button>
                   } 
                    {replyClicked  &&
                    
                    <button
                           
                           style={{ width:"10vh", height:'5vh'}} 
                           className="btn btn-dark btn-sm mr-2" onClick={onReply}>Replying...
                   </button>
                    }   
                    <button 
                            style={{ width:"10vh", height:'5vh'}} 
                            className="btn btn-danger btn-sm mr-2" 
                            onClick={removeInquiry}>Delete
                    </button>
                </div>
                </div>            
        </div>
        </div>
              

        </Fragment>
    )
}

export default InquiryItem
