import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { BLUE } from '../utils/colors.js'

export default class HomeScene extends Component {


    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() => navigate('Search')}
                    title="Go to search"
                    color={BLUE}/>
            </View>
        );
    }
}
