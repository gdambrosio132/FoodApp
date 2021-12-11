import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';
import { GetRequest } from '../FoodAPI';
import { ClarifaiView } from '../ClarifaiView';

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});


it('Food API test - apple', () => {
 
  let actualResult = FoodAPI.componentDidMount("Apple");
  let expectedResult = "52";
  expect(actualResult).toBe(expectedResult);

})


it('Food API test - Emptry String', () => {

  let actualResult = FoodAPI.componentDidMount("");
  let expectedResult = "";
  expect(actualResult).toBe(expectedResult);

})

it('Food API test - inValid input', () => {

  let actualResult = FoodAPI.componentDidMount("ADKLADLADAK");
  let expectedResult = "";
  expect(actualResult).toBe(expectedResult);

})

it('Food API test - tomatoe', () => {

  let actualResult = FoodAPI.componentDidMount("tomatoe");
  let expectedResult = "35";
  expect(actualResult).toBe(expectedResult);

})

it('Food API test - UPPER Case ', () => {

  let actualResult = FoodAPI.componentDidMount("APPLE");
  let expectedResult = "52";
  expect(actualResult).toBe(expectedResult);

})

it('Food API test - Lower Case ', () => {

  let actualResult = FoodAPI.componentDidMount("apple");
  let expectedResult = "52";
  expect(actualResult).toBe(expectedResult);

})

it('Food API test - Apple typo - Appple ', () => {
  let actualResult = FoodAPI.componentDidMount("Appple");
  let expectedResult = "52";
  expect(actualResult).toBe(expectedResult);

})