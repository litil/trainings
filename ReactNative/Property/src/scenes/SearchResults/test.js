import 'react-native';
import React from 'react';
import SearchResults from './index.js';

import renderer from 'react-test-renderer';

const listings = [
    {title: 'property 1'},
    {title: 'property 2'},
    {title: 'property 3'},
    {title: 'property 4'},
    {title: 'property 5'}
]

it('renders correctly', () => {
    const tree = renderer.create(<SearchResults listings={listings}/>);
});
