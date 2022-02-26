const axios = require("axios");
const auth = require('../middleware/auth') 

/**
 * second call to api for price obj by event id
 * @param {*} id 
 * @returns 
 */
const getMinPrice = async (id) =>{
    
    return axios.get(`https://app.ticketmaster.eu/mfxapi/v2/events/${id}/prices?domain=germany&lang&price_level_ids&apikey=${process.env.API_KEY}`)
    
    
}

exports.getPricing = async (req,res) =>{
  const {eventID} = req.query
  const results = await getMinPrice(eventID)
  console.log(results.data.event)
  if(results.data.event.price_types.length < 1){
    return res.status(200).json({message: 'Price is 20 euro,',payload:20})
  } else {
     return res.status(200).json({message: 'price by id', payload: results.data.event.price_types[0].price_levels[0].face_value })

  }

}
/**
 * parse only data we need from ticketmaster api 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.showInfo = async (req, res) => {

  try {
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
      if(prices.event) {
        dataObj.prices = prices.event.price_types[0].price_levels[0].face_value
      } else {
        return dataObj.prices = 20
      }
  
      return dataObj
    }))

    return res.status(200).json({ message: "list", payload: dataArr });
  } catch(error) {
    res.status(500).json({ message: "error" })
  }

  



  // return res.status(200).json({ message: "list", payload: dataArr });
};




exports.searchByName = async (req,res)=>{


   const { attractionName } = req.query
   try {
     const response = await axios.get(`https://app.ticketmaster.eu/mfxapi/v2/attractions?attraction_name=${attractionName}&domain=germany&apikey=${process.env.API_KEY}`)
  //  console.log(res.attractions)
      return res.status(200).json({message:'search results', payload: response.data})

   } catch (error) {
     console.log(error)
     return res.status(500).json({message: 'error happened', error})
     
   }
   


}

exports.eventDetails = async ( req,res) =>{
  const {attractionIDs} = req.query
  const response = await axios.get(`https://app.ticketmaster.eu/mfxapi/v2/events?domain=germany&prices&price_level_ids&min_price&max_price&price_excl_fees&domain&lang&attraction_ids=${attractionIDs}&category_ids=10001&subcategory_ids&event_ids&event_name&venue_ids&city_ids&country_ids&postal_code&lat&long&radius&eventdate_from=2022-02-27T10:01:00Z&eventdate_to=2023-12-27T10:01:00Z&offsaledate_to&offsaledate_from&min_price&max_price&price_excl_fees&seats_available&cancelled&&is_not_package&sort_by&order&rows&start&exclude_external&apikey=${process.env.API_KEY}`)
  return res.status(200).json({message: 'event details', payload: response.data})
}