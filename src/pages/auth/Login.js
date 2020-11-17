import React, {useState, Fragment} from 'react'
import Layout from "../../core/Layout"
const Login = () => {

    const [user, setUser]=useState({
      
        email:"",
        password: ""
       
    })

     const onChange = (e)=>{
         setUser({...user, [e.target.name]: e.target.value})
     }
     const onSubmit =e=>{
         e.preventDefault()
         console.log('Login Submited..')
     }

    const { email, password} =user

    return (
         <Fragment>
       
         <Layout       
                     title ='CARCHECKERS' 
                     description='Pre-purchase inspection for your future vehicle.' className='container-fluid '>
        <div className="container mb-5">
            <h1>
                Account Login <span className="text-primary">Admin Login</span>
            </h1>
            <form onSubmit={onSubmit}>
               
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChange}/>
                </div>
               
                <input 
                    type="submit" 
                    value="Login" 
                    className="btn btn-primary btn-block"/>
            </form>
            
        </div>                            
         
         </Layout>
    </Fragment>
    )
}

export default Login
