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
    return async (dispatch) => { 
        try { 
            const flights = await axios({ 
                url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${startAirport}/${endAirport}/${startDate}/${endDate}`,
                method: 'GET',
                headers: {"X-RapidAPI-Key": "5b24116ce5mshede7e490cdd03cap1fa922jsn7cb852ed1a78"}
            })
            dispatch(getFlights(flights.data))
        } catch (error) { 
            console.log(error)
        }
    }
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



