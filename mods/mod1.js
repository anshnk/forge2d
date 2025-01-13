// mod1.js
const customBlocks = {
    "bread": "Bread",
};

const blocknames = window.blocknames || {};
const selblocks = window.selblocks || [];
const allblocks = window.allblocks || [];

// Inject custom blocks into blocknames and allblocks
Object.keys(customBlocks).forEach(block => {
    blocknames[block] = customBlocks[block];
    allblocks.push(block);
    selblocks.push(block);
});

// Example for adding block images for custom blocks
const loadedImages = window.loadedImages || {};
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
