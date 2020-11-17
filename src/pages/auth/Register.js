import React, {useState, Fragment, useContext, useEffect} from 'react'
import Layout from "../../core/Layout";
import AlertContext from '../../context/alert/alertContext'
import Alerts from '../../core/Alert';
import AuthContext from '../../context/auth/authContext'

const Register = (props) => {




    const alertContext = useContext(AlertContext)
    const {setAlert} = alertContext

    const authContext = useContext(AuthContext)
    const {register, error, clearErrors, isAuthenticated} = authContext

    useEffect(()=>{
        if(isAuthenticated){
            //redirect to page if authenticated
            props.history.push('/inquiries')
        }
        if(error === "User already exists"){
            setAlert(error, 'danger')
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])


//state for form to store inputs
    const [user, setUser]=useState({
        name:"",
        email:"",
        password: "",
        password2: ''
    })

     const onChange = (e)=>{
         setUser({...user, [e.target.name]: e.target.value})
     }
     const onSubmit = e=>{
         e.preventDefault()

         //validation
        if(name ==="" || email ==="" || password ===""){
            setAlert('Please enter all fields', 'danger')
        }else if(password !== password2){
            setAlert("Passwords do not match", 'danger')
        }else{
            // console.log("Register submited")
            register({
                name,
                email,
                password
            })
        }
    
    
     }

    const {name, email, password, password2} =user

    return (
         <Fragment>
       
         <Layout       
                     title ='CARCHECKERS' 
                     description='Pre-purchase inspection for your future vehicle.' className='container-fluid '>
            <Alerts/>             
        <div className="container mb-5">
            <h1>
                Account <span className="text-primary">Register new admin</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={onChange}
                        required
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChange}
                        required
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChange}
                        minLength = "6"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input 
                        type="password" 
                        name="password2" 
                        value={password2} 
                        onChange={onChange}
                        minLength = "6"
                        />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
            
        </div>                       
         </Layout>
    </Fragment>
    )
}

export default Register
