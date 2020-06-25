import React, { useState } from "react";
import { useKeyPress } from "../hooks/useKeyPress";
import { clamp } from "../lib/clamp";
import "../styles/styles.css";

const List = ({ items }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const moveDown = useKeyPress("ArrowDown");
  const moveUp = useKeyPress("ArrowUp");

  if (moveDown) {
    setHighlightedIndex(prev => {
      return clamp({
        value: prev + 1,
        min: 0,
        max: items.length - 1
      });
    });
  }
  if (moveUp) {
    setHighlightedIndex(prev => {
      console.log("prev: ", prev);
      return clamp({ value: prev - 1, min: 0 });
    });
  }
  console.log("highlightedIndex: ", highlightedIndex);
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          {item.text}
          {` `}
          {highlightedIndex === index
            ? `highlighted ${highlightedIndex + 1}`
            : ""}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const items = [
    { id: 1, text: "one" },
    { id: 2, text: "two" },
    { id: 3, text: "three" }
  ];
  return (
    <div>
      <List items={items} />
    </div>
  );
};

export default App;
