const acRE = /<md:AssertionConsumerService.*\/>/gms
const slsRE = /<md:SingleLogoutService.*\/endpoint"\/>/gms
const isDefaultRE = /isDefault.*=.*"true"|"false"/gms
const certificateRE = /<ds:X509Certificate>(.[^(><.)]+)<\/ds:X509Certificate>/s
const indexRE = /index.*=.*"/s

exports.getAssertionConsumerServiceToken = function (toParse, index) {
    let myMatches = toParse.match(acRE);
    let result = myMatches[0].replace(isDefaultRE, "")
    if(index==="0" || index===0){
        result = result.replace(indexRE, `index="${index}" isDefault="true"`)
    }else{
        result = result.replace(indexRE, `index="${index}"`)
    }
    return result
}
exports.getCertificateToken = function (toParse) {
    let myMatches = toParse.match(certificateRE);
    let result = myMatches[1].replace(/^\s+|\s+$/g, '')
    return result
}

exports.getSingleLayoutServiceToken = function (toParse) {
    let myMatches = toParse.match(slsRE);
    return myMatches[0]
}

