

exports.cToF = function (c) {
    let cTemp = c;
    let cToFahr = cTemp * 9 / 5 + 32;
    return cToFahr.toFixed(2)
}

exports.fToC = function (f) {
    let fTemp = f;
    let fToCel = (fTemp - 32) * 5 / 9;
    return fToCel.toFixed(2)
}
