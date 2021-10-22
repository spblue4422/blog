/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
require('ts-node').register();
const { createPages } = require('./src/lib/createPages');

exports.createPages = createPages;
