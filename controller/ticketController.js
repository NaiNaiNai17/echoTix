const axios = require("axios");

exports.showInfo = async (req, res) => {
  const eventRes = await axios.get(
    "https://app.ticketmaster.eu/mfxapi/v2/events?domain=germany&prices&price_level_ids&min_price&max_price&price_excl_fees&domain&lang&attraction_ids&category_ids&subcategory_ids&event_ids&event_name&venue_ids&city_ids&country_ids&postal_code&lat&long&radius&eventdate_to&eventdate_from&onsaledate_to&onsaledate_from&offsaledate_to&offsaledate_from&min_price&max_price&price_excl_fees&seats_available&cancelled&&is_not_package&sort_by&order&rows&start&exclude_external&apikey=MfGA9VPSiHpjw1NESnhCQV8uZBJAwy5e"
  );
const eventsList = eventRes.data.events
console.log(eventsList)
  // console.log(eventRes.data.events, "event response");
  // if(eventsList.categories.name === 'Konzerte'){
  //  return eventsList.attractions.name
  // }
};
