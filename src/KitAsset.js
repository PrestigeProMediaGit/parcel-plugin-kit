const kit = require('ppm-node-kit');
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

class KitAsset extends HTMLAsset {
    parse(code) {
        return super.parse(kit(code));
    }
}

module.exports = KitAsset;
