import React from "react";
import ModalImageDetail from "../ModalImageDetail";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer
    .create(<ModalImageDetail text="Mock text" visible={true} onClose={() => {}} styles={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
