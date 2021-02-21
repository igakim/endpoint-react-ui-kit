const combineSelectors = require('postcss-combine-duplicated-selectors');

module.exports = {
  plugins: [combineSelectors({ removeDuplicatedProperties: true })],
};
