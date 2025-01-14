// Don't redeclare customBlocks, blocknames, selblocks, or loadedImages
// Assume these variables exist globally due to the injector.js script

// Add or modify custom blocks in the existing global customBlocks object
customBlocks["bread"] = "Bread";

// Inject custom blocks into blocknames, allblocks, and selblocks
Object.keys(customBlocks).forEach(block => {
    blocknames[block] = customBlocks[block];
    allblocks.push(block);
    selblocks.push(block);
});

// Add images for custom blocks in the existing blockimages and loadedImages
for (const blk of Object.keys(customBlocks)) {
    const imageKey = `block_${blk}`;
    blockimages[imageKey] = new Image();
    blockimages[imageKey].src = `../images/block_${blk}.png`;

    blockimages[imageKey].onload = () => {
        loadedImages[imageKey] = blockimages[imageKey];
        console.log(`${imageKey} loaded`);
    };

    blockimages[imageKey].onerror = () => {
        console.error(`Failed to load image for ${imageKey}`);
    };
}

console.log("mod1.js executed successfully!");
function theRealTest() {
    console.log("This is the real test");
}