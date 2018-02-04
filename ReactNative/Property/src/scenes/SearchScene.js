import React, {Component} from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
    TextInput,
    Button,
    Image,
    ActivityIndicator
} from 'react-native';
import { BLUE } from '../utils/colors.js'

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
}

export default class SearchScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            searchString: 'london',
            message: ''
        };
    }

    /**
     * Called when the user presses the button
    */
    _onSearchPressed = () => {
        const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        this._executeQuery(query);
    };

    /**
     * Called when the user changes the text in the text input
     *
     * @param event
     */
    _onSearchTextChanged = (event) => {
        this.setState({searchString: event.nativeEvent.text});
        console.log('Current: ' + this.state.searchString + ', Next: ' + event.nativeEvent.text);
    };

    /**
     * Performs an API request
     */
     _executeQuery = (query) => {
         this.setState({isLoading: true});

         fetch(query)
            .then(response => response.json())
             .then(json => this._handleResponse(json.response))
             .catch(error => this.setState({
                 isLoading: false,
                 message: 'Something bad happened ' + error
             })
         );
     };

     /**
      * Handle the API response
      */
      _handleResponse = (response) => {
          this.setState({isLoading: false, message: ''});

          if (response.application_response_code.substr(0, 1) === '1') {
              const { navigate } = this.props.navigation;
              navigate('Results', {listings: response.listings, name: 'Jane'})

          } else {
              this.setState({message: 'Location not recognized; please try again.'});
          }
      };

    render() {
        const spinner = this.state.isLoading ?
            <ActivityIndicator size='large'/> : <Text></Text>

        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search for houses to buy!
                </Text>
                <Text style={styles.description}>
                    Search by place-name or postcode.
                </Text>
                <View style={styles.flowRight}>
                    <TextInput
                        value={this.state.searchString}
                        style={styles.searchInput}
                        onChange={this._onSearchTextChanged}
                        placeholder='Search via name or postcode'/>
                    <Button
                        onPress={this._onSearchPressed}
                        color={BLUE}
                        title='Go'/>
                </View>
                <Image source={require('../../Resources/house.png')} style={styles.image}/>
                {spinner}
                <Text>{this.state.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: BLUE,
        borderRadius: 8,
        color: BLUE
    },
    image: {
        width: 217,
        height: 138
    }
});
