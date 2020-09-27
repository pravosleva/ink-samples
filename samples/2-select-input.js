import React from "react";
import { render } from "ink";
import SelectInput from "ink-select-input";

// https://github.com/vadimdemedes/ink
// https://github.com/vadimdemedes/ink-select-input

const Demo = () => {
  const handleSelect = (item) => {
    // `item` = { label: 'First', value: 'first' }
    console.log(item);
  };

  const items = [
    {
      label: "First",
      value: "first",
    },
    {
      label: "Second",
      value: "second",
    },
    {
      label: "Third",
      value: "third",
    },
  ];

  return <SelectInput items={items} onSelect={handleSelect} />;
};

render(<Demo />);
