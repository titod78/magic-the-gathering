import React from "react";
import MtgCard from "../MtgCard";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const item = {
    id: 1,
    name: "mock name",
    type: "mock type",
    colors: ["mock color"],
    setName: "mock set name",
    imageUrl: "http://mock.com/mock.jpg"
  };

  const tree = renderer.create(<MtgCard item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});
