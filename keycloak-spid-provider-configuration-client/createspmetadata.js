const {httpCallKeycloakGetIpds, httpCallKeycloakGetIpdDescription} = require('./src/http')
const {config} = require('./src/common')
const {getAssertionConsumerServiceToken, getCertificateToken, getSingleLayoutServiceToken} = require('./src/spmetadataparser')
const {from, of} = require('rxjs')
const {map, mergeMap, toArray, filter, take} = require('rxjs/operators')
const fs = require('fs')
const ejs = require('ejs');

//recupero idp configurati su keycloak
const getKeycloakIdPs$ = from(httpCallKeycloakGetIpds())
    .pipe(mergeMap(httpResponse => from(httpResponse.data)))
    .pipe(filter(keycloakIdpRepresentation => keycloakIdpRepresentation.providerId === 'spid'))

//recupero i dati che servono per produrre il file e li trasformo nel modello atteso per il merge
const idpsModelToMerge$ = getKeycloakIdPs$
    .pipe(mergeMap(keycloakIdpRepresentation => from(httpCallKeycloakGetIpdDescription(keycloakIdpRepresentation.alias).then(httpResponse => [keycloakIdpRepresentation, httpResponse.data]))))
    .pipe(map(tupla => {
        let [keycloakIdpRepresentation, httpResponse] = tupla
        let assertionCostumerServiceXmlToken = getAssertionConsumerServiceToken(httpResponse, keycloakIdpRepresentation.config.attributeConsumingServiceIndex)
        let singleLayoutServiceXmlToken = getSingleLayoutServiceToken(httpResponse)
        let certificateToken = getCertificateToken(httpResponse)
        keycloakIdpRepresentation['assertionCostumerServiceXmlToken'] = assertionCostumerServiceXmlToken
        keycloakIdpRepresentation['certificateToken'] = certificateToken
        keycloakIdpRepresentation['singleLayoutServiceXmlToken'] = singleLayoutServiceXmlToken
        return keycloakIdpRepresentation
    }))
    .pipe(toArray())
    .pipe(map(idps => {
        let common = {
            entityid: idps[0].config.entityId,
            certificate: idps[0].certificateToken,
            realm: config.realm,
            keycloakServerBaseURL: config.keycloakServerBaseURL
        }
        return {idps, common}
    }))


let xml$ = idpsModelToMerge$.pipe(map(jsonDataModel=>{
    let template = fs.readFileSync('./template/sp_metadata.ejs').toString()
    return ejs.render(template, jsonDataModel);
}))

xml$.subscribe(xml => {
        fs.writeFile("spmetadata.xml", xml, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing spmetadata.xml file.");
                return console.log(err);
            }
            console.log("the spmetadata.xml file has been saved.");
        });
    })

