import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem';

export default class SearchResults extends Component {
    static propTypes = {
        /** Array of properties */
        listings: PropTypes.array.isRequired
    }
    static defaultProps = {}

    _keyExtractor = (item, index) => index;

    _renderItem = ({item, index}) => (
        <ListItem
            item={item}
            index={index}
            onPressItem={this._onPressItem}/>
    );

    _onPressItem = (index) => {
        console.log("Pressed row: " + index);
    };

    render() {
        return <FlatList
            data={this.props.listings}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}/>
    }
}
