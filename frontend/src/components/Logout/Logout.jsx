import React,{useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from '../../util/axiosInstance'
import {SearchContext} from '../../hoc/MainRouter'

export default function Logout()  {
const {  setLoggedIn } = useContext(SearchContext);

const navigate= useNavigate()

useEffect(() => {
  async function logout(){
  const response = await axios.get('/user/logout')
   setLoggedIn(false)
  console.log(response)
  navigate('/')
} 
    
  setTimeout(()=>{
    logout()   
  },1000)
}, [])
    


   
    return (
        <div>
            <h1>You are being logged out</h1>
            
        </div>
    )
}