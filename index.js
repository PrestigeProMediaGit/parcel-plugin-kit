module.exports = (bundler) => {
    // Register ourselves to handle .kit files
    bundler.addAssetType('kit', require.resolve('./src/KitAsset'));
};
