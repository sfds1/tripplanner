import axios from 'axios'; 

// call 
export const GET_FLIGHTS = 'GET_FLIGHTS'
// set initial 
const initialState = { 
    flights: []
};

export const getFlights = (flights) => { 
    return { 
        type: GET_FLIGHTS, 
        flights
    }
}
//Axios call to GET data
export const fetchFlights = (endAirport, startAirport, startDate, endDate) => { 
    console.log(endAirport,startAirport,startDate, endDate)
    axios.get( 
        `${'https://cors-anywhere.herokuapp.com/'}https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/${startAirport}/${endAirport}/${startDate}/${endDate}`,

       {
           headers: {
               "X-RapidAPI-Key": "5b24116ce5mshede7e490cdd03cap1fa922jsn7cb852ed1a78"
         } 
   }).then(results=>{
       console.log("flights.data", results.data);
      
   })

    // return (dispatch) => { 
    //     try { 
    //         const flights =  axios.get( 
    //              `https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/
    //             ${startAirport}/
    //             ${endAirport}/
    //             ${startDate}/
    //             ${endDate}`,

    //             {
    //                 headers: {
    //                     "X-RapidAPI-Key": "5b24116ce5mshede7e490cdd03cap1fa922jsn7cb852ed1a78"
    //               } 
    //         }).then(results=>{
    //             console.log("flights.data", results.data);
    //             dispatch(getFlights(results.data))
    //         })
       
         
    //     } catch (error) { 
    //         console.log(error)
    //     }
    // }
}

// Redux Reducer

export default (state = {}, action) => { 
    switch(action.type) { 
        case GET_FLIGHTS: 
            return action.flights
        default: 
            return state;
    }
};



