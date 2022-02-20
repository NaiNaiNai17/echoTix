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
    
    //coming from body
    // { eventID: 387fhgsuege, amount: 3, customerID: 284dywe }

    // save to customer profile in the DB
    //   basket: [{ eventID: '13757174', amount: 1}]
    // sent 200

//     try {
//         const newBasket = await Basket.create({
//             artistID: body.artistID,
//             showDate:body.showDate,
//             img:body.img,
//             city:body.city,
//             venue:body.venue,
//             ticketDescription:body.ticketDescription,
//             price:body.price,
//             //
//             vat:body.vat,
//             fee:body.fee,
//             totalIncVat:body.totalIncvat,
//             trees:body.trees, //0.5
//             customer:body.customer //id
//         })

//         return res.status(200).json({message: 'Basket Created', newBasket})
//     } catch (error) {
//         return res.status(400).json({message: 'Error creating Basket'})
        
//     }
// }

// getCustomerBasket
// req.body = { customerID: 3yvgw4bsusw}
// request customer basket from DB
/* send basket: {
    artistID: body.artistID,
            showDate:body.showDate,
            showImg:body.img,
            city:body.city,
            venue:body.venue,
            ticketDescription:body.ticketDescription,
            price:body.price,
            //
            vat:body.vat,
            fee:body.fee,
            totalIncVat:body.totalIncvat,
            trees:body.trees, //0.5
            customer:body.customer //id
}
*/

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