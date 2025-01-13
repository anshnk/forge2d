// List of mod files that are located in the "mods" folder (example list, you can modify as needed)
const modFiles = [
    'mod1.js',
];

// Load all mod files from the 'mods' directory
function loadMods() {
    const modFiles = ['mod1.js']; // Add your mod files here manually or dynamically

    modFiles.forEach(modFile => {
        const script = document.createElement('script');
        script.src = `mods/${modFile}`;
        script.type = 'text/javascript';
        script.onload = () => {
            console.log(`Loaded and executed mod: ${modFile}`);
        };
        script.onerror = () => {
            console.error(`Failed to load mod: ${modFile}`);
        };
        document.body.appendChild(script);
        console.log(`Script tag added for mod: ${modFile}`); // Debug log
    });
}

// Call the function to load mods after the page has loaded
window.addEventListener('load', () => {
    console.log("Page loaded, starting to load mods."); // Debug log
    loadMods(); // Load all the mods dynamically
});


// Define custom blocks to be injected (Placeholder, can be modified dynamically from mods)
const customBlocks = {
};

// Object to track loaded images
const loadedImages = {};

// Ensure blocknames, selblocks, and allblocks are defined
window.addEventListener('load', () => {
    if (typeof blocknames !== 'undefined' && typeof selblocks !== 'undefined') {
        if (typeof allblocks === 'undefined') {
            window.allblocks = [];
        }

        // Inject custom block names
        injectCustomBlocks();
        loadCustomBlockImages();
    } else {
        console.error("blocknames or selblocks object not found.");
    }
});

// Function to inject custom blocks into blocknames, allblocks, and selblocks
function injectCustomBlocks() {
    Object.keys(customBlocks).forEach(block => {
        blocknames[block] = customBlocks[block];
    });

    allblocks.push(...Object.keys(customBlocks));
    selblocks.push(...Object.keys(customBlocks));

    console.log("Custom blocks injected:", customBlocks);
}

// Function to load images for custom blocks
function loadCustomBlockImages() {
    for (const blk of Object.keys(customBlocks)) {
        const imageKey = `block_${blk}`;
        blockimages[imageKey] = new Image();
        blockimages[imageKey].src = `images/block_${blk}.png`;

        blockimages[imageKey].onload = () => {
            loadedImages[imageKey] = blockimages[imageKey];
            console.log(`${imageKey} loaded`);
        };

        blockimages[imageKey].onerror = () => {
            console.error(`Failed to load image for ${imageKey}`);
        };
    }
}

// Initialize block images for regular blocks
function initializeRegularBlockImages() {
    for (const blk of allblocks.filter(block => !customBlocks.hasOwnProperty(block))) {
        const imageKey = `block_${blk}`;
        blockimages[imageKey] = new Image();
        blockimages[imageKey].src = `images/block_${blk}.png`;

        blockimages[imageKey].onload = () => {
            loadedImages[imageKey] = blockimages[imageKey];
            // Remove comment for debugging console.log(`${imageKey} loaded`);
        };

        blockimages[imageKey].onerror = () => {
            console.error(`Failed to load image for ${imageKey}`);
        };
    }
}

function tp(x, y) {
    player.y = y; 
    player.x = x;
    console.log(`Teleported to (${y}, ${x})! `);
}

// Load regular block images on startup
window.addEventListener('load', initializeRegularBlockImages);