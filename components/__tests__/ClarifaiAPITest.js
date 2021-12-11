import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';
import { GetRequest } from '../FoodAPI';
import { ClarifaiView } from '../ClarifaiView';

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});


it('Clarifai API test - Picture of the apple', () => {

  let apple; 

  // Reading data from the TXT file 
  fetch('./data/appleBase64.txt')
    .then(function (data) {
      apple = data // base64 of the apple picture 
    })

    let expectedResult = "Apple";
    let actualResult = ClarifaiView.clarifaiDetectObjectsAsync(apple);

    expect(actualResult).toBe(expectedResult);

})

it('Clarifai API test - Empty Picture', () => {

  let emptyData;

  // Reading data from the TXT file 
  fetch('./data/emptyBase64.txt')
    .then(function (data) {
      emptyData = data
    })

  let expectedResult = "";
  let actualResult = ClarifaiView.clarifaiDetectObjectsAsync(emptyData);

  expect(actualResult).toBe(expectedResult);
})


it('Clarifai API test - Picture of a cat', () => {

  let cat;

  // Reading data from the TXT file 
  fetch('./data/catBase64.txt')
    .then(function (data) {
      cat = data // base64 of the cat picture 
    })

  let expectedResult = "";
  let actualResult = ClarifaiView.clarifaiDetectObjectsAsync(cat);

  expect(actualResult).toBe(expectedResult);

})