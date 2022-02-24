import React,{useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from '../../util/axiosInstance'
import {SearchContext, CartContext} from '../../hoc/MainRouter'


export default function Logout()  {
  const {cartQty, setCartQty} = useContext(CartContext)
const {  setLoggedIn } = useContext(SearchContext);

const navigate= useNavigate()

useEffect(() => {
  async function logout(){
  const response = await axios.get('/user/logout')
   setLoggedIn(false)
  console.log(response)
  setCartQty(0)
  sessionStorage.clear();
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