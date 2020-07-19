import React from "react";
import MtgCard from "../MtgCard/MtgCard";

const List = ({ items, onClick }) => {
  return items.map((item, i) => <MtgCard key={i} item={item} onClick={onClick} />);
};

export default List;
