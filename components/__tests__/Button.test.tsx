// __tests__
import * as React from "react";
import Button from "../Button";
import renderer from "react-test-renderer";
it(`renders correctly`, () => {
  const tree = renderer.create(<Button>Save Calories</Button>);
  
  expect(tree).toMatchSnapshot();
});