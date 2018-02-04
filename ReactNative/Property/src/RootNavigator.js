import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SearchScene from './scenes/SearchScene';
import HomeScene from './scenes/HomeScene';
import SearchResults from './scenes/SearchResults/';

/**
 * Turns this.props.navigation.state.params into this.params.<x>
 */
const paramsToProps = (SomeComponent) => {
    return class extends React.Component {
        static navigationOptions = SomeComponent.navigationOptions;
    	// everything else, call as SomeComponent
        render() {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScene,
        navigationOptions: {
            headerTitle: 'Home'
        }
    },
    Search: {
        screen: SearchScene,
        navigationOptions: {
            headerTitle: 'Search'
        }
    },
    Results: {
        screen: paramsToProps(SearchResults)
    }
});

export default RootNavigator;
