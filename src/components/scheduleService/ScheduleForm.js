import React, { useState } from 'react'
import axios from 'axios'

const ScheduleForm =()=> {

  const [sentEmail, setSentEmail] = useState({
    name: '',
    phone:"",
    email: "",
    year:"",
    make:"",
    model:"",
    trim:"",
    subject:"",
    comments:"",
    sent: false
  })

  const {name, phone , email, year, make, model, trim, comments, subject, sent}= sentEmail

  
   
    // handle inputs 

    const handleChange = e => 
      setSentEmail({...sentEmail, [e.target.name]:e.target.value})
    
 
    
    // end of handle inputs   
    
   const  formSubmit=(e)=>{
      e.preventDefault();    
      
     axios.post('http://localhost:3001/api/forma', sentEmail)
      .then((res)=>{       
    //  setSentEmail({...sentEmail, sent:true})
        resetForm()   
        
      })
      .catch(()=>{
        console.log('message not send');
        
      })
      
     
     }
    
    
    // for reseting the form data
   const resetForm=()=>{
     setSentEmail({
    name: '',
    phone:"",
    email: "",
    year:"",
    make:"",
    model:"",
    trim:"",
    subject:"",
    comments:"", 
    sent:true
    
      
      })  
     
    }

    const labelStyle = {
      fontSize: "2vh",
      fontWeight:"bold"
    }

    
        return (
            <div className="container mb-5">
            <form onSubmit={formSubmit}>
            
            <div className="singleItem">
              <label style={labelStyle} htmlFor="name">Name</label>
              <input 
                    type="text" 
                    name="name" 
                    className="name" 
                    value={name} 
                    onChange={handleChange} 
                    placeholder="your name..." 
                    required
                    />
            </div>
      
            <div className="singleItem">
                  <label style={labelStyle} htmlFor="email"><strong>Your E-mail</strong></label>
                  <input 
                      type="email" 
                      name="email" 
                      className="email" 
                      value={email} 
                      onChange={handleChange} 
                      placeholder="Enster your e-mail" 
                      required
                      />
                </div>
      
                <div className="singleItem">
                  <label style={labelStyle} htmlFor="phone"><strong>Phone</strong></label>
                  <input 
                      type="tel" 
                      name="phone" 
                      className="phone" 
                      value={phone} 
                      onChange={handleChange} 
                      placeholder="your phone..."  />
                </div>
                <h2>Vehicle Inforamtion</h2>
                
                <div className="row ml-1">
                   
                <div className="singleItem">
                  <label style={labelStyle} htmlFor="year"><strong>Year</strong></label>
                  <input 
                        type="number" 
                        name="year" 
                        className="name" 
                        value={year} 
                        onChange={handleChange} 
                        placeholder="Vehicle year" />
                </div>
                <div className="singleItem ml-2">
                  <label style={labelStyle} htmlFor="make"><strong>Make</strong></label>
                  <input 
                        type="text" 
                        name="make" 
                        className="name" 
                        value={make} 
                        onChange={handleChange} 
                        placeholder="Vehicle make" />
                </div>
                <div className="singleItem ml-2">
                  <label style={labelStyle} htmlFor="model"><strong>Model</strong></label>
                  <input 
                        type="text" 
                        name="model" 
                        className="model" 
                        value={model} 
                        onChange={handleChange} 
                        placeholder="Enter desired vehicle model" />
                </div>
      
            
            <div className="singleItemml-2">
                  <label style={labelStyle} htmlFor="trim"><strong>Trim</strong></label>
                  <input 
                        type="text" 
                        name="trim" 
                        className="trim" 
                        value={trim} 
                        onChange={handleChange} 
                        placeholder="Enter trim if any" />
                </div>
                </div>
                <div className="singleItem">
                  <label style={labelStyle} htmlFor="subject"><strong>Subject</strong></label>
                  <input 
                      type="text" 
                      name="subject" 
                      className="subject" 
                      value={subject} 
                      onChange={handleChange} 
                      placeholder="Subject line"  />
                </div>
          
                <div className="textArea singleItem">
                <label style={labelStyle} htmlFor="message"><strong>Your message</strong></label>
                  <textarea 
                    style={{height:"20vh"}}
                      name="comments" 
                      value={comments} 
                      id="" cols="50" 
                      rows="50" 
                      placeholder="your message..." 
                      onChange={handleChange}></textarea>
                </div>
          
      
             
            {sent &&

            <div >Message has been sent</div>
            } 
            <div >
            <button className="btn btn-primary" type="submit">Send Request</button>
            </div>     
      
           </form>
          </div>
        )
    
}


export default ScheduleForm;
