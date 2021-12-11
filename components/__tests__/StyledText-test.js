import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';
import { GetRequest } from '../FoodAPI';
import { ClarifaiView } from '../ClarifaiView';
it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders correctly', () => {
  const tree = renderer.create(
    <ClarifaiView food="apple" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
  console.log(tree)
});