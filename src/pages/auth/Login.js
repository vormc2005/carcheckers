import React, {useState, Fragment, useContext, useEffect} from 'react';
import Layout from "../../core/Layout";
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';



const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext
    const {login, error, clearErrors, isAuthenticated} = authContext

    useEffect(()=>{
        if(isAuthenticated){
            //redirect to page if authenticated
            props.history.push('/inquiries')
        }
        if(error === "Invalid Credentials"){
            setAlert(error, 'danger')
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])



    const [user, setUser]=useState({
      
        email:"",
        password: ""
       
    })

     const onChange = (e)=>{
         setUser({...user, [e.target.name]: e.target.value})
     }
     const onSubmit =e=>{
         e.preventDefault()
        if(email === "" || password === ""){
            setAlert("Please fill in all fields", "danger")
        }else{
            login({
                email,
                password
            })
        }
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
                        required
                        />
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
