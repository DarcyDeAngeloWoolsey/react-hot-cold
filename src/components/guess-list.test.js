import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={ [] }/>);
    });
        
    it('Has class guessBox', () => {
        const wrapper = shallow(<GuessList guesses={ [] }/>);
        expect(wrapper.find('ul').hasClass('guessBox')).toEqual(true);
        });
     
    //How to check if {guesses} null?
    
    });