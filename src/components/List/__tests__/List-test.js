import React from "react";
import List from "../List";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const list = [
    {
      id: 1,
      name: "mock name",
      type: "mock type",
      colors: ["mock color"],
      setName: "mock set name",
      imageUrl: "http://mock.com/mock.jpg"
    }
  ];

  const tree = renderer.create(<List items={list} />).toJSON();
  expect(tree).toMatchSnapshot();
});
