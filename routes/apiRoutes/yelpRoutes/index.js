const router = require('express').Router();
const axios = require('axios');


const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user
router.route('/yelp')
    .post((req , res) => { 
        const { city } = req.body;
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
    headers: {
      Authorization: process.env.BEARER_TOKEN,
    },

    params: {
        location: city,
        categories: 'tours, All',
  },
}).then(async (response) => { 
    const apiData = response.data.businesses.map((tours) => { return [name, image_url, rating] })
    for (let i=0; i < apiData.length; i++) 
}) catch (e) { 
    console.log(e);
}
};

module.exports = router;

