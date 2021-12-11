import * as React from 'react';
import renderer from 'react-test-renderer';
import ClarifaiView from '../ClarifaiView';

it(`renders correctly`, () => {
    const tree = renderer.create(<ClarifaiView imageResponse = ""/>).toJSON();
    expect(tree).toMatchSnapshot();
  });