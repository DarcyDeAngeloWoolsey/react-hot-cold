import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
        
    it('Renders correctly', () => {
        const tree = renderer.create(
            <TopNav />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('Has class clearfix', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('ul').hasClass('clearfix')).toEqual(true);
    });
        
    it('Should add a class when the link is clicked', () => {
        const wrapper = shallow(<TopNav />);
//        wrapper.simulate('click');
        expect(wrapper.find('a').first().hasClass('what')).toEqual(true);
    });
        
    it('Should call onInfo when clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onInfo={callback} />);
                                
        wrapper.find('.what').simulate('click')
        
        expect(callback).toHaveBeenCalled();
    })
});