require('dotenv').config()
const fs = require('fs')

const config = {
    ...process.env
}

exports.config = config

exports.usernameMapperTemplate = require('../template/username_mm.json')
exports.lastnameMapperTemplate = require('../template/lastname_mm.json')
exports.firstnameMapperTemplate = require('../template/firstname_mm.json')

exports.spidCodeMapperTemplate = require('../template/spidcode_mm.json');
exports.emailMapperTemplate = require('../template/email_mm.json');
exports.taxIdMapperTemplate = require('../template/taxid_mm.json');
exports.genderMapperTemplate = require('../template/gender_mm.json');
exports.dateOfBirthMapperTemplate = require('../template/dateofbirth_mm.json');
exports.placeOfBirthMapperTemplate = require('../template/placeofbirth_mm.json');
exports.countyOfBirthMapperTemplate = require('../template/countyofbirth_mm.json');
exports.mobilePhoneMapperTemplate = require('../template/mobilephone_mm.json');
exports.addressMapperTemplate = require('../template/address_mm.json');
exports.digitalAddressMapperTemplate = require('../template/digitaladdress_mm.json');
exports.companyNameMapperTemplate = require('../template/companyname_mm.json');
exports.companyAddressMapperTemplate = require('../template/companyaddress_mm.json');
exports.vatNumberapperTemplate = require('../template/vatnumber_mm.json');


exports.patchTemplate = function (templateFilePath) {
    let templateString = fs.readFileSync(templateFilePath).toString();
    return templateString.replace(/%REALM%/g, config.realm)
        .replace(/%KEYCLOAKSERVERBASEURL%/g, config.keycloakServerBaseURL)
}

