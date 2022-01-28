const axios = require("axios");
/**
 * parse only data we need from ticketmaster api 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.showInfo = async (req, res) => {
  const eventRes = await axios.get(process.env.EVENTS_API);
  const dataArr = []
  eventRes.data.events.map((e) =>{
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
      dataArr.push(dataObj)
  })
// a second api call just to get the price if available
//makes api request for single event and return min price getMinPrice

  const getMinPrice = async (id) =>{
    const priceCall = await axios.get(`https://app.ticketmaster.eu/mfxapi/v2/events/${id}/prices?domain=germany&lang&price_level_ids&apikey=${process.env.API_KEY}`)
    return priceCall
  }
  
  dataArr.forEach((e) =>{
    //how to save price depending on
   
    e['price'] = getMinPrice(e.price_types)
     
  })
  

  return res.status(200).json({ message: "list", payload: dataArr });
};
