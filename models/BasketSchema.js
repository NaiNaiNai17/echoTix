const {Schema, model, SchemaType} = require('mongoose')

const basketSchema = new Schema({
    eventID:{type:Schema.Types.ObjectId, required:true, ref:'Product'},
    ticketAmount:{type:Number, required:true},
    customerID:{type:Schema.Types.ObjectId, required:true, ref:'User'}
    
})


const Basket = model('Basket', basketSchema)
module.exports = Basket;