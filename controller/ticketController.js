const axios = require("axios");
const auth = require('../middleware/auth') 

/**
 * second call to api for price obj by event id
 * @param {*} id 
 * @returns 
 */
const getMinPrice = async (id) =>{
    
    return axios.get(`https://app.ticketmaster.eu/mfxapi/v2/events/${id}/prices?domain=germany&lang&price_level_ids&apikey=${process.env.API_KEY}`)
    .then(response=>{ 
      // check the prices and return the minimum
      return response.data
    }).catch(error =>{
      return error
    })
    
}
/**
 * parse only data we need from ticketmaster api 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.showInfo = async (req, res) => {
  const eventRes = await axios.get(process.env.EVENTS_API)
  const dataArr = await Promise.all(eventRes.data.events.map(async (e) =>{

    const dataObj = {
      id: e.id,
      title: e.name,
      img: e.images,
      date:e.event_date,
      url:e.url,
      venue:e.venue.name,
      address: [
        e.venue.location.address.address,
        e.venue.location.address.postal_code,
        e.venue.location.address.city,

      ]
    }

    prices = await getMinPrice(e.id)
    dataObj.price = prices.event.price_types[0].price_levels[0].face_value
    return dataObj

}))

  return res.status(200).json({ message: "list", payload: dataArr });
};

const apiSearch = async (req,res) =>{
   
 } 

exports.searchByName = async (req,res)=>{
//  const attraction = req.query
  //  const string = req.query
   const { attractionName } = req.query
   const response = await axios.get(`https://app.ticketmaster.eu/mfxapi/v2/attractions?attraction_name=${attractionName}&domain=germany&apikey=${process.env.API_KEY}`)
  //  console.log(res.attractions)
  console.log(response.data)
  return res.status(200).json({message:'search results', payload: response.data})

}