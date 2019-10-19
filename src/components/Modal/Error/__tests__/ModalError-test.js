import React from "react";
import ModalError from "../ModalError";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<ModalError text="Mock text" visible={true} onClose={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
