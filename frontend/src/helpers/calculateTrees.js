
const calculateTrees = ( cartItems )=>{
    let totalAmount = 0
    if (cartItems !== null){
      cartItems.forEach((ticket)=> {
      totalAmount = totalAmount + (ticket.qty * ticket.price)  
      })
    }
 
    const treeAmount = (totalAmount * 0.1) /5
    return treeAmount
  }
  
  export default calculateTrees
