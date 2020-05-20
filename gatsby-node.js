const path = require('path');
const EpisodesData = require('./src/json/episodes.json');

// Creates the pages from the JSON, as found here:
// https://dev.to/ashleemboyer/build-a-multi-page-gatsby-site-from-json-3kp
// TODO: add tags pages, and others from markdown fromhere:
// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const template = path.resolve('./src/templates/Episode.js');

    EpisodesData.forEach((e) => {
        createPage({
            path: e.slug,
            component: template,
            context: e,
        });
    });
};
