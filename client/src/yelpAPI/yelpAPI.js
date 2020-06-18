import React from 'react';
import axios from 'axios';
import BEARER_TOKEN from './config.js';



export default class tourismList extends React.Component { 

    state = { 
        tours : []
    }

    componentDidMount() { 
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories/`, { 
            headers: { 
                authorization:  `${BEARER_TOKEN}`
            },
            params: {
                 location: 'san jose',
                 categories: 'tourism',
             } 



            
            
        }).then(res => { 
            console.log(res.data);
        });
    }

    render() { 

        return ( 
            <div></div>
        )
    }
}

