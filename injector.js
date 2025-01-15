const modFiles = ['mod1.js', 'newplayer.js'];
const customBlocks = {}, loadedImages = {};

window.addEventListener('load', () => {
    modFiles.forEach(file => {
        const script = document.createElement('script');
        script.src = `mods/${file}`;
        script.type = 'text/javascript';
        script.onload = () => console.log(`Loaded: ${file}`);
        script.onerror = () => console.error(`Failed: ${file}`);
        document.body.appendChild(script);
    });

    if (blocknames && selblocks) {
        window.allblocks = window.allblocks || [];
        injectBlocks();
    } else {
        console.error("blocknames or selblocks missing.");
    }
});

function injectBlocks() {
    Object.keys(customBlocks).forEach(block => {
        blocknames[block] = customBlocks[block];
        allblocks.push(block);
        selblocks.push(block);

        const imgKey = `block_${block}`;
        const img = blockimages[imgKey] = new Image();
        img.src = `../images/block_${block}.png`;
        img.onload = () => loadedImages[imgKey] = img;
        img.onerror = () => console.error(`Failed to load image for ${imgKey}`);
    });
}


function tp(x,y) {
    player.x = x;
    player.y = y;
}