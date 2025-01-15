const blockList = [
    { key: "bread", value: "Bread" },
    { key: "breadbread", value: "BreadBread" },
];

blockList.forEach(block => {
    customBlocks[block.key] = block.value;
});

injectBlocks();