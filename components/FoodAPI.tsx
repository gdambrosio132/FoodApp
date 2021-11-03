import React from 'react'

import { Text, View } from './Themed'

import * as KEYS from '../constants/APIKeys'
import * as Urls from '../constants/Urls'

class GetRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calories: null,
    };
  }

  
  componentDidMount() {
    console.log("Food: " + this.props.food)
    
    // Building request URI 
    const URI = Urls.edamamURL + "?app_id=" + KEYS.EDAMAM_APP_ID + "&app_key=" + KEYS.EDAMAM_APP_KEY + "&ingr="
    
    //Get Request 
    fetch(
      URI + this.props.food,
      {
        method: 'GET', headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => this.setState({ calories: data.parsed[0].food.nutrients.ENERC_KCAL})
    )
      //.then(data => this.setState({ totalReactPackages: data.parsed.food}))
  }

  // Returning the result
  render() {
    const { calories } = this.state;
    return (
      <Text>{calories}</Text>
    );
  }
}

export { GetRequest }; 
