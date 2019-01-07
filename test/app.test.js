import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../client/index.jsx';


describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const component = shallow(<App />);
      //const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    })
  })
});
