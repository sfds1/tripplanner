import axios from 'axios';

const YELP_API_KEY = '4oqtYN6ntFys9IoVhDhYyWKrCj2UOzDvbrTm29c7UqQ_MCjgtI4zHb3P6m6sg_jupRk-wTim5vRojSpDkukulu9tOv3haZ9YXlCKkZGrPCKGRH3y6AJhBkATlROlXnYx';

const api = axios.create({ 
    baseURL: 'https://api.yelp.com/v3',
    headers: { 
        Authorization: `Bearer ${YELP_API_KEY}`,
    },

});

const getPlaces = (coordinates, search) => { 
    const latitude = coordinates[0].lat;
    const longitude = coordinates[0].lon;
    const location = { latitude, longitude };

    return api 
        .get('/businesses/search', { 
            params: { 
                limit: 30, 
                sortBy: 'rating',
                term: search,
                ...location,
            },
        })
        .then(res => 
            res.data.businesses.map(business => { 
                return { 
                    name: business.name,
                    coords: business.coordinates,
                    rating: business.rating,
                    location: business.location,
                    price: business.price,
                };
            })
         )
         .catch(error => console.error(error));
};

export default { 
    getPlaces,
};