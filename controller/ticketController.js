const axios = require("axios");
const auth = require('../middleware/auth')
/**
 * parse only data we need from ticketmaster api 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.showInfo = async (req, res) => {
  const eventRes = await axios.get(process.env.EVENTS_API);
  const dataArr = [];
  eventRes.data.events.forEach((e) => {
    const dataObj = {
      id: e.id,
      title: e.name,
      img: e.images,
      event_date: e.event_date,
      venue: e.venue.name,
      address: [
        e.venue.location.address.address,
        e.venue.location.address.postal_code,
        e.venue.location.address.city,
      ],
      price: e.price_ranges,
      url: e.url,
    };
    dataArr.push(dataObj);
  });

  return res.status(200).json({ message: "list", payload: dataArr });
};
