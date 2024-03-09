const isdToCountryCode = require("./countryCodes.js");

function getCountryCode(isd) {
    return isdToCountryCode[isd];
}

