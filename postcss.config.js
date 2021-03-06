const combineSelectors = require('postcss-combine-duplicated-selectors');

module.exports = {
  plugins: [
    combineSelectors({ removeDuplicatedProperties: true }),
    require('postcss-combine-media-query'),
    require('postcss-discard-duplicates'),
  ],
};
