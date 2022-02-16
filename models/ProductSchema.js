const {Schema, model} = require('mongoose')


const productSchema = new Schema ({
    createdOn:{type:Date, default: Date.now},
    ticketName:{type:String, required:true},
    ticketDescription:{type:String, required:true},
    price:{type:Number, required: true}
})

const Product = model('Product', ticketSchema)
