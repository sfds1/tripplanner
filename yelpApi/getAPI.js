// import BEARER_TOKEN from '../yelpApi/config'
import axios from 'axios'


const getApi = axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=san jose`, {
    headers: {
      authorization: process.env.BEARER_TOKEN,
  },
    params: {
       categories: 'tours, All',
  }
  })
  .then((res) => {
  console.log(res.data.businesses)
 })
  .catch((err) => {
 console.log ('error')
  })

export default getApi;