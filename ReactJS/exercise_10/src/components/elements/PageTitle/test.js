import React from 'react'
import { mount } from 'enzyme';
import PageTitle from './index.js'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('Component must contain a h1 element', () => {
    const title = 'test title'
    const cmpt = mount(<PageTitle title={title} />)

    expect(cmpt.find('h1').length).toBe(1)
    expect(cmpt.find('h1').at(0).text()).toBe(title)
});
