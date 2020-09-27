import React from "react";
import { render, Box, Text } from "ink";
import SelectInput from "ink-select-input";

const Example = () => {
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
  const handleSelect = (item) => {
    console.log(item);
  };

  return (
    <>
      <Box width={80} height={1}>
        <Text color="green">Select the item</Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} />
    </>
  );
};

render(<Example />);
