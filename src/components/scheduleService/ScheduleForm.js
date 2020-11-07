import React, {useState} from 'react';
import axios from 'axios';

const ScheduleForm = () => {
    const [sentEmail, setSentEmail] = useState({
        name:'',
        subject:"",
        email:'',
        phone:'',
        year:"",
        make:"",
        model:"",
        trim:'',
        comments:"",
        sent: false
      })
    
      const {name, phone, email, subject, comments, year, make, model, trim, sent}= sentEmail
    
       
        // handle inputs 
    
        const handleChange = e => 
          setSentEmail({...sentEmail, [e.target.name]:e.target.value})
        
     
        
        // end of handle inputs   
        
       const formSubmit=(e)=>{
          e.preventDefault();    
         
          
         axios.post('http://localhost:3001/api/forma', sentEmail)
          .then((res)=>{
           
            setSentEmail({...sentEmail, sent:true})
              resetForm()   
          })
          .catch(()=>{
            console.log('message not send');
            
          })
          
         
         }
        
        // for reseting the form data
       const resetForm=()=>{
          setSentEmail({
            name:'',
            phone:'',
            message:'',
            email:'',
            subject:"",
            year:"",
            make:"",
            model:"",
            trim:'',
            comments:"",
            sent: false
          
          })    
         
        }
        
        const formStyle ={
            marginBottom: "10vh"
        }
        
            return (
                <div className="container" style={formStyle}>
                <form onSubmit={formSubmit}>
                
                <div className="singleItem">
                  <label htmlFor="name">Name</label>
                  <input 
                        type="text" 
                        name="name"  
                        value={name} 
                        onChange={handleChange} 
                        placeholder="your name..." />
                </div>
          
                <div className="singleItem">
                  <label htmlFor="email">Your email</label>
                  <input 
                      type="email" 
                      name="email" 
                      className="email" 
                      value={email} 
                      onChange={handleChange} 
                      placeholder="Enster your e-mail" />
                </div>
          
                <div className="singleItem">
                  <label htmlFor="phone">Phone</label>
                  <input 
                      type="tel" 
                      name="phone" 
                      className="phone" 
                      value={phone} 
                      onChange={handleChange} 
                      placeholder="your phone..." required />
                </div>
                <hr></hr>
                <h2>Vehicle Inforamtion</h2>
                
                <div className="row ml-1">
                   
                <div className="singleItem">
                  <label htmlFor="year">Year</label>
                  <input 
                        type="number" 
                        name="year" 
                        className="name" 
                        value={year} 
                        onChange={handleChange} 
                        placeholder="Vehicle year" />
                </div>
                <div className="singleItem ml-2">
                  <label htmlFor="make">Make</label>
                  <input 
                        type="text" 
                        name="make" 
                        className="name" 
                        value={make} 
                        onChange={handleChange} 
                        placeholder="Vehicle make" />
                </div>

                <div className="singleItem ml-2">
                  <label htmlFor="model">Model</label>
                  <input 
                        type="text" 
                        name="model" 
                        className="model" 
                        value={model} 
                        onChange={handleChange} 
                        placeholder="Enter desired vehicle model" />
                </div>

                <div className="singleItemml-2">
                  <label htmlFor="trim">Trim</label>
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
                  <label htmlFor="subject">Subject</label>
                  <input 
                      type="text" 
                      name="subject" 
                      className="subject" 
                      value={subject} 
                      onChange={handleChange} 
                      placeholder="Subject line"  />
                </div>
          
                <div className="textArea singleItem">
                <label htmlFor="message">Message</label>
                  <textarea 
                    style={{height:"20vh"}}
                      name="comments" 
                      value={comments} 
                      id="" cols="50" 
                      rows="50" 
                      placeholder="your message..." 
                      onChange={handleChange}></textarea>
                </div>
          
                 
                 <div className={sent?'msg msgAppear':'msg'}>Message has been sent</div>
                <div className="btn">
                <button type="submit">Submit</button>
                </div>
          
          
               </form>
              </div>
            )
        
}

export default ScheduleForm