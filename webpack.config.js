const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin;

const path = require('path');

module.exports = {
    plugins: [
        new VuetifyLoaderPlugin(),
        // new BundleAnalyzerPlugin()
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        }
    },
};