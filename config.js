const TITLE = 'ramp Training Datasets';

function preprocess(stac) {
    if (stac.getBrowserPath() === '/') {
        stac.title = TITLE;
        stac.description = 'The ramp project is designed to lower the barrier of entry for users in the global development community looking to learn about geospatial ML/AI and extract building footprints from high-resolution satellite imagery. The training set hosted on MLHub provides over 1 million buildings across the 100k+ 256px X 256px labeled training data chips with their associated source images in GeoTIFF format. The training data contains both ‘Tier 1’ and ‘Tier 2’ training sets, with ‘Tier 1’ defined as highly accurate, curated chips that were reviewed and improved at least two times, and ‘Tier 2’ containing accurate chips featuring one round of review and improvement. The codebase associated with the ramp project has both a “baseline” model which will perform moderately well across a variety of geographies, and a “fine-tuned” model that has been specifically designed to perform very well over Bangladesh. Thorough documentation can be found on the ramp website, along with many other supporting materials including the Imagery Acquisition Guidance, Training Label Guidance, Case Studies, Ethics Framework and more.';
        stac.links = stac.links.filter(link => link.rel !== 'child');
    }
    return stac;
}

module.exports = {
    catalogUrl: "https://api.radiant.earth/mlhub/v1/", // Must have a slash at the end for folders/APIs
    catalogTitle: TITLE,
    allowExternalAccess: false, // Must be true if catalogUrl is not given
    useTileLayerAsFallback: true,
    tileSourceTemplate: null,
    displayGeoTiffByDefault: true,
    buildTileUrlTemplate: ({href, asset}) => 'https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url=' + encodeURIComponent(asset.href.startsWith('/vsi') ? asset.href : href),
    stacProxyUrl: null,
    pathPrefix: "/stac-browser-ramp",
    historyMode: "hash",
    cardViewMode: 'cards',
    showThumbnailsAsAssets: false,
    stacLint: false,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    collectionsFilter: c => c.id.startsWith("ramp_") && !c.id.endsWith('_source'),
    preprocessSTAC: preprocess,
    authConfig: {
        type: 'query', // null or 'query' or 'header'
        key: 'key',
        description: `Please get the API key from your [Radiant MLHub Profile](https://mlhub.earth/profile).`
    }
};
