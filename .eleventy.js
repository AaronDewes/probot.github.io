
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./assets/sass");
	eleventyConfig.addWatchTarget("./assets/js");
	eleventyConfig.addPassthroughCopy("./assets/js");

	eleventyConfig.addPassthroughCopy("./assets/dist");

	eleventyConfig.addWatchTarget("./assets/img");
	eleventyConfig.addPassthroughCopy("./assets/img");

	eleventyConfig.addWatchTarget("./api");
	eleventyConfig.addPassthroughCopy("./api");

    eleventyConfig.addPlugin(syntaxHighlight);

    let {Liquid} = require("liquidjs");
    let options = {
        extname: ".liquid",
        dynamicPartials: true,
        strict_filters: true,
        root: ["_includes"]
    };
    const liquid = new Liquid(options);
    liquid.registerTag('octicon', require("./js/octicons-liquid/tag.js"));
    eleventyConfig.setLibrary("liquid", liquid);

	return {
		passthroughFileCopy: true,
        dir: {
            layouts: "_layouts"
        }
	}
}
