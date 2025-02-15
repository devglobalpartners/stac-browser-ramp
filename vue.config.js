const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
	.parserConfiguration({'camel-case-expansion': false})
	.boolean([
		'allowExternalAccess',
		'displayGeoTiffByDefault',
		'redirectLegacyUrls',
		'showThumbnailsAsAssets',
		'stacLint',
		'useTileLayerAsFallback'
	])
	.number([
		'itemsPerPage',
		'maxPreviewsOnMap'
	])
	.argv;
// Clean-up arguments
delete argv._;
delete argv.$0;

const pkgFile = require('./package.json');

const path = require('path');
const configFile = path.resolve(argv.CONFIG ? argv.CONFIG : './config.js');
const configFromFile = require(configFile);
const mergedConfig = Object.assign(configFromFile, argv);
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
	lintOnSave: process.env.NODE_ENV !== 'production',
	publicPath: mergedConfig.pathPrefix,
	chainWebpack: webpackConfig => {
		webpackConfig.plugin('define').tap(args => {
			args[0].STAC_BROWSER_VERSION = JSON.stringify(pkgFile.version);
			args[0].CONFIG_PATH = JSON.stringify(configFile);
			args[0].CONFIG_CLI = JSON.stringify(argv);
			return args;
		});
		webpackConfig.plugin('html').tap(args => {
			args[0].title = mergedConfig.catalogTitle;
			return args;
		});
	},
	configureWebpack: {
		plugins: [
			new NodePolyfillPlugin({
				includeAliases: ['Buffer', 'console', 'http', 'https', 'process', 'url']
			})
		]
	}
};