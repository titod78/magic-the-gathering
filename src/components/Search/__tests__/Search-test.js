import React from "react";
import Search from "../Search";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer
    .create(<Search searchCallback={() => {}} resetCallback={() => {}} updateSearchCallback={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
