import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken'
import axios from 'axios'

            import {
                REGISTER_SUCCESS, 
                REGISTER_FAIL, 
                USER_LOADED,
                AUTH_ERROR, 
                LOGIN_SUCCESS, 
                LOGIN_FAIL,
                CLEAR_ERRORS
            } from '../types'





const AuthState = props=>{

    const initialState ={
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      error: null,
      user: null,

      
       
    };

    // Need to get state from card and link it to request*****************************

    const [state, dispatch] = useReducer(authReducer, initialState)
    
  // Load user
  const loadUser = async ()=>{
    // @todo - load token into global headers
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try{
        const res  = await axios.get('/api/auth')
        dispatch({
            type:USER_LOADED,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: AUTH_ERROR
        })
    }
  }

  //Register user
    const register = async (formData)=>{
        const config ={
            headers:{
                'Content-Type':  'application/json'
            }
        }
        try{
            const res = await axios.post('/api/users', formData, config)
            dispatch({
               type: REGISTER_SUCCESS,
               payload: res.data 
            })
            loadUser();
        }catch(err){
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
             })
        }
    }
  //Login User
  const login =()=>{
    console.log('Login User')
}
  //Logout
  const logout =()=>{
    console.log('Logout')
}

//   Clear Errors
  const clearErrors =()=>{
    dispatch({type:CLEAR_ERRORS})
}
   
return (
    <AuthContext.Provider value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading, 
        user:state.user,
            register, 
            login,
            logout, 
            clearErrors, 
            loadUser
       
    }}>
       
        {props.children}
    </AuthContext.Provider>
);

};

export default AuthState;



