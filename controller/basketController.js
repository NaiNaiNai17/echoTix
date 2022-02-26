const { default: axios } = require('axios');
const Basket = require ('../models/BasketSchema')


exports.addToBasket= async(req,res) =>{ // addToBasket 
    const {body} = req;

    const basket = await Basket.create({
        eventID:body.eventID,
        ticketAmount:body.ticketAmount,
        customerID:body.customerID
    })
}
    
exports.listOrder = async(req,res) =>{
    const page = Number(req.query.page) || 1
    const pageSize = Number(req.query.pageSize) || 10

    const skipRows = (page -1) * pageSize

    try {
        const orders = await Basket.find().skip(skipRows).limit(pageSize)

        return res.status(200).json({message: 'list of orders', orders})
    } catch (error) {
        return res.status(400).json({message: 'Error listing Orders'})
    }
}

exports.listOrderByCustomer = async(req,res) =>{

    const page = Number(req.query.page) || 1
    const pageSize = Number(req.query.pageSize) || 10

    const skipRows = (page - 1) * pageSize

    try {
        const basket = await Basket.find({customer:req.user._id})
        .populate('customer')
        .skip(skipRows)
        .limit(pageSize)

        return res.status(200).json({message:'list of orders', basket})
    } catch (error) {
        return res.status(400).json({message:'Error cannot list order'})
    }
}