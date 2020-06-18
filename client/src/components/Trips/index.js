import React, { Component } from "react";
import axios from 'axios';
import BEARER_TOKEN from '../../yelpAPI/config'


class Trips extends Component {

  state = { 
    tours : []
    
}

componentDidMount() { 
  console.log(BEARER_TOKEN);

  axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${"Chicago"}`, {
    headers: {
      Authorization: `${BEARER_TOKEN}`
  },
    params: {
      
    categories: 'tours, All',
  }
  })
  .then((res) => {
  console.log(res)
  })
  .catch((err) => {
  console.log ('error')
  })

}

  render() {
    return (

      <div>

        Trips

      </div>
    )
  }
};

export default Trips;