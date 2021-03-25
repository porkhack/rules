const tree = require("../tree");

// Make a rule to link asns from partners back to farmer
module.exports = ({ partnerid }) => ({
  $schema: "https://formats.openag.io/oada/ainz.rule",
  type: "reindex",
  list: `/bookmarks/trellisfw/trading-partners/${partnerid}/bookmarks/trellisfw/asns`,
  destination: "/bookmarks/trellisfw/asns",
  tree,
  itemsPath: "$.day-index.*.*",
  // Match all ASNs?
  schema: {
    allOf: [
      {
        //$ref: "https://formats.openag.io/trellifw/asn/porkhack/v1.schema.json",
      },
    ],
  },
});
