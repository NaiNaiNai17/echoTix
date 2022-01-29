const axios = require("axios");
const auth = require('../middleware/auth') 

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
  const eventRes = await axios.get(process.env.EVENTS_API);
  const dataArr = await Promise.all(eventRes.data.events.map(async (e) =>{
    const dataObj = {
      id: e.id,
      title: e.name,
      img: e.images,
      date:e.event_date,
      venue:e.venue.name,
      address: [
        e.venue.location.address.address,
        e.venue.location.address.postal_code,
        e.venue.location.address.city,

      ]

    }
    dataObj.prices = await getMinPrice(e.id)
    
    return dataObj
}))
// a second api call just to get the price if available
//makes api request for single event and return min price getMinPrice

 

  
  //  dataArr.forEach(async(e) =>{
  //   //how to save price depending on

   
  //   e['price'] = await getMinPrice(e.id)
     
  // })
  

  return res.status(200).json({ message: "list", payload: dataArr });
};
