import * as React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../../navigation/index';

it(`renders correctly`, () => {
    const tree = renderer.create(<Navigation colorScheme = {'dark'}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });