const Basket = require ('../models/BasketSchema')


exports.ticketOrder = async(req,res) =>{
    const {body} = req;

    try {
        const newBasket = await Basket.create({
            ticketDescription:body.ticketDescription,
            price:body.price,
            vat:body.vat,
            fee:body.fee,
            trees:body.trees,
            customer:body.customer

        })
    } catch (error) {
        
    }
}