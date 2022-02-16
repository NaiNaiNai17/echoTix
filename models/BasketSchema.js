const {Schema, model, SchemaType} = require('mongoose')


const basketSchema = new Schema({
    ticketDescription:{type:String, required:true},
    price:{type: Number, required: true},
    vat:{type: Number, required: true},
    totalIncVat:{type:Number, required:true},
    fee: {type:Number, required: true},
    trees: {type:Number, required: true},
    customer: {type:Schema.Types.ObjectId, ref: 'User'}

})

const Basket = model('Basket', basketSchema)
module.exports = Basket;