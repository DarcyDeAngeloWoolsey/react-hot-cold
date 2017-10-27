import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList />);
    });
        
    it('Has class guessList', () => {
        const wrapper = shallow(<GuessList />);
        expect(wrapper.find('ul').hasClass('guessBox')).toEqual(true);
        });    
    });