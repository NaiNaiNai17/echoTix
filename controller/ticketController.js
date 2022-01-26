const axios = require("axios");
//take api result and use redis to get every (time)

exports.showInfo = async (req, res) => {
  const eventRes = await axios.get(
    "https://app.ticketmaster.eu/mfxapi/v2/events?domain=germany&prices&price_level_ids&min_price&max_price&price_excl_fees&domain&lang&attraction_ids&category_ids=10001&subcategory_ids&event_ids&event_name&venue_ids&city_ids&country_ids&postal_code&lat&long&radius&eventdate_to&eventdate_from&onsaledate_to&onsaledate_from&offsaledate_to&offsaledate_from&min_price&max_price&price_excl_fees&seats_available&cancelled&&is_not_package&sort_by&order&rows&start&exclude_external&onsaledate_from=2022-02-01T10:00:00Z&onsaledate_to=2023-02-01T10:00:00Z&eventdate_from=2022-02-01T10:00:00Z&eventdate_to=2023-02-01T10:00:00Z&apikey=MfGA9VPSiHpjw1NESnhCQV8uZBJAwy5e"
  );
  const dataArr=[]
  eventRes.data.events.forEach((e)=>{
    const dataObj = {
      id: e.id,
      title:e.name,
      img:e.images,
      event_date:e.event_date,
      venue:e.venue.name,
      address:[e.venue.location.address.address,
        e.venue.location.address.postal_code,
        e.venue.location.address.city],
      price:e.price_ranges,
      url:e.url
    }
    dataArr.push(dataObj)
  })
const eventsList = eventRes.data.events
console.log(eventsList)
  console.log(eventRes.data.events, "event response");
  // if(eventsList.categories.name === 'Konzerte'){
  //  return eventsList.attractions.name
  // }
  return res.status(200).json({message: 'list', payload:dataArr})
};

// exports.showInfo = async (req,res) =>{
//   const eventRes = 'https://app.ticketmaster.eu/mfxapi/v2/events?domain=germany&apikey=MfGA9VPSiHpjw1NESnhCQV8uZBJAwy5e'
//    console.log(eventRes)
  // const eventRes = {
  //   method: 'GET',
  //   url: 'https://app.ticketmaster.eu/mfxapi/v2/events?domain=germany&apikey=MfGA9VPSiHpjw1NESnhCQV8uZBJAwy5e',
    
  // }
  // try {
  //   const response = await axios.get(eventRes)
  //   response.find()
  //   return res.status(200).json({message:''})
  // } catch (error) {
    
  // }
  
// }
