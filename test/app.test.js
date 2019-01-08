import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../client/index.jsx';
const mockFunction = jest.fn();
const request = require('supertest');



describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const component = shallow(<App />);
      expect(toJson(component)).toMatchSnapshot();
    })
  })
});

describe("GET /songs", () =>{
  test('it should respond with correct numbers of songs', async () => {
    const response = await request("http://localhost:5000").get('/songs');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(4);
  })
})
describe("GET Filtered songs based on request ", () =>{
  test('it should respond with array of songs', async () => {
    const response = await request("http://localhost:5000").get('/filterSongsJazz');
    expect(response.statusCode).toBe(200);
    const songType = response.body[0]['playlist_name']
    console.log('this is songtype', songType);
    expect(songType).toEqual('Jazz');

  })
})