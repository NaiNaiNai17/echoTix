// const axios = require("axios");
// const auth = require('../middleware/auth') 

// /**
//  * second call to api for price obj by event id
//  * @param {*} id 
//  * @returns 
//  */
// // const getMinPrice = async (id) =>{
    
// //     return axios.get(`https://app.ticketmaster.eu/mfxapi/v2/events/${id}/prices?domain=germany&lang&price_level_ids&apikey=${process.env.API_KEY}`)
// //     .then(response=>{ 
// //       return response.data
// //     }).catch(error =>{
// //       return error
// //     })
    
// // }

// const getDate = async (id) =>{
//   return axios.get(`EVENTS_API=https://app.ticketmaster.eu/mfxapi/v2/events/${id}/?domain=germany&prices&price_level_ids&min_price&max_price&price_excl_fees&domain&lang&attraction_ids&category_ids=10001&subcategory_ids&event_ids&event_name&venue_ids&city_ids&country_ids&postal_code&lat&long&radius&eventdate_from=2022-02-27T10:01:00Z&eventdate_to=2023-12-27T10:01:00Z&offsaledate_to&offsaledate_from&min_price&max_price&price_excl_fees&seats_available&cancelled&&is_not_package&sort_by&order&rows&start&exclude_external&apikey=${process.env.API_KEY}`)
//   .then(response =>{
//     return response.data
//   }).catch(error =>{
//     return error
//   })
   
// }
// /**
//  * parse only data we need from ticketmaster api 
//  * @param {*} req 
//  * @param {*} res 
//  * @returns 
//  */
// exports.showInfo = async (req, res) => {
//   const eventRes = await axios.get(process.env.EVENTS_API)
//   const dataArr = await Promise.all(eventRes.data.events.map(async (e) =>{

//     const dataObj = {
//       id: e.id,
//       title: e.name,
//       img: e.images,
//       date:e.event_date,
//       url:e.url,
//       venue:e.venue.name,
//       address: [
//         e.venue.location.address.address,
//         e.venue.location.address.postal_code,
//         e.venue.location.address.city,

//       ]
//     }

//     prices = await getMinPrice(e.id)
//     dataObj.price = prices.event.price_types[0].price_levels[0].face_value
//     return dataObj

// }))

//   return res.status(200).json({ message: "list", payload: dataArr });
// };



 //process attractions function make a helper
// exports.searchByName = async (req,res)=>{

//    const { attractionName } = req.query
//    const response = await axios.get(`https://app.ticketmaster.eu/mfxapi/v2/attractions?attraction_name=${attractionName}&domain=germany&apikey=${process.env.API_KEY}`)
//    const searchArray = await Promise.all(response.data.events.map(async(e) =>{
//        const searchObj = {
//         id: e.id,
//         title: e.name,
//         img: e.images.large.url,
       
//        }
//        prices = await getMinPrice(e.id)
//        searchObj.prices = prices.event.price_types[0].price_levels[0].face_value
//        date = await getDate(e.id)
//        searchObj.date = date.event.event_date.value
//         console.log(searchObj)
//         return searchObj
      
//    }))
   
//   return res.status(200).json({message:'search results', payload: response.data})

// }


   
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
    console.log(dataObj.price)
    return dataObj

}))

  return res.status(200).json({ message: "list", payload: dataArr });
};



exports.searchByName = async (req,res)=>{
//  const attraction = req.query
  //  const string = req.query
   const { attractionName } = req.query
   const response = await axios.get(`https://app.ticketmaster.eu/mfxapi/v2/attractions?attraction_name=${attractionName}&domain=germany&apikey=${process.env.API_KEY}`)
  //  console.log(res.attractions)

  return res.status(200).json({message:'search results', payload: response.data})

}