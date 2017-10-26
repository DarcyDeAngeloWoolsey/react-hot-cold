import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });
        
//    it('Renders correctly', () => {
//        const tree = renderer.create(
//            <GuessForm />
//        ).toJSON();
//        expect(tree).toMatchSnapshot();
//    });
        
    it('Find the form and simulate a submit', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm    onGuess={callback} />
         );
        
        wrapper.instance().setEditing(true);
        wrapper.update();
        wrapper.find('input[name="userGuess"]').instance().value = '71';

      wrapper.find('form').simulate('submit')

        expect(callback).toHaveBeenCalledWith('71');
    })
        
});