const TITLE = 'DevGlobal - RAMP';

function preprocess(stac) {
    if (stac.getBrowserPath() === '/') {
        stac.title = TITLE;
        stac.description = 'This is the RAMP project by DevGlobal...';
        stac.links = stac.links.filter(link => link.rel !== 'child');
    }
    return stac;
}

module.exports = {
    catalogUrl: "https://api.radiant.earth/mlhub/v1/",
    catalogTitle: TITLE,
    allowExternalAccess: false, // Must be true if catalogUrl is not given
    useTileLayerAsFallback: true,
    tileSourceTemplate: null,
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
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    collectionsFilter: c => c.id.startsWith("sen12floods_"),
    preprocessSTAC: preprocess
};