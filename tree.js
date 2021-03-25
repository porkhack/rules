const objectAssignDeep = require("object-assign-deep");

const { asn, "trading-partner": partner } = require("@pork/trees");

// Assemple whole tree??
module.exports = objectAssignDeep({}, asn, partner);
