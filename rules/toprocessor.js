const tree = require("../tree");

// Make a rule to link asns from farmer to processor if processorid matches
module.exports = ({ processorid }) => ({
  $schema: "https://formats.openag.io/oada/ainz.rule",
  type: "reindex",
  list: "/bookmarks/trellisfw/asns",
  tree,
  itemsPath: "$.day-index.*.*",
  schema: {
    description: `Matches a porkhack ASN for processor with internal id "${processorid}"`,
    allOf: [
      {
        //$ref: "https://formats.openag.io/trellifw/asn/porkhack/v1.schema.json",
      },
    ],
    type: "object",
    properties: {
      farmer: {
        type: "object",
        properties: { processorid: { const: processorid } },
      },
    },
  },
  destination: `/bookmarks/trellisfw/trading-partners/${processorid}/bookmarks/trellisfw/asns`,
});
