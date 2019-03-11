import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';

describe('Header Component', () => {

    it('render correctly Header component', () => {
        const HeaderComponent = renderer.create(<Header />).toJSON();
        expect(HeaderComponent).toMatchSnapshot();
    });
});