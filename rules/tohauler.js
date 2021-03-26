const tree = require("../tree");

// Make a rule to link asns from farmer to hauler if haulerid matches
module.exports = ({ haulerid }) => ({
  $schema: "https://formats.openag.io/oada/ainz.rule",
  type: "reindex",
  list: "/bookmarks/trellisfw/asns",
  tree,
  // Make versioned link since tree PUT is glitchy
  versioned: true,
  itemsPath: "$.day-index.*.*",
  schema: {
    description: `Matches a porkhack ASN for hauler with internal id "${haulerid}"`,
    allOf: [
      {
        //$ref: "https://formats.openag.io/trellifw/asn/porkhack/v1.schema.json",
      },
    ],
    type: "object",
    properties: {
      farmer: {
        type: "object",
        properties: { haulerid: { const: haulerid } },
      },
    },
  },
  destination: `/bookmarks/trellisfw/trading-partners/${haulerid}/bookmarks/trellisfw/asns`,
});
