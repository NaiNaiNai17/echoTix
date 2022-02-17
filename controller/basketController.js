const Basket = require ('../models/BasketSchema')


exports.ticketOrder = async(req,res) =>{
    const {body} = req;

    try {
        const newBasket = await Basket.create({
            artistID: body.artistID,
            eventID: body.eventID,
            showDate:body.showDate,
            img:body.img,
            city:body.city,
            venue:body.venue,
            ticketDescription:body.ticketDescription,
            price:body.price,
            vat:body.vat,
            fee:body.fee,
            totalIncVat:body.vat,
            trees:body.trees, //0.5
            customer:body.customer //id
        })
        return res.status(200).json({message: 'Basket Created', newBasket})
    } catch (error) {
        return res.status(400).json({message: 'Error creating Basket'})
        
    }
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