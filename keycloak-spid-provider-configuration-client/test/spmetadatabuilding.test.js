const fs = require('fs')
const ejs = require('ejs');

let dataToMerge
let template
let common

beforeAll(() => {
    common = {
        entityid: "http://kc-local-test:8080/auth/realms/spid",
        certificate: "MIIClzCCAX8CBgF27P+TPTANBgkqhkiG9w0BAQsFADAPMQ0wCwYDVQQDDARzcGlkMB4XDTIxMDExMDE1NTA0MVoXDTMxMDExMDE1NTIyMVowDzENMAsGA1UEAwwEc3BpZDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJTPNsscIS/hh7AF0Bdj/WZDcwsSJ8X4wT/PO8hh4Znh91LC9nfkDWT5GyQWwgTNvXBZLvZLoRd6mANiPq6PJQ0h+TQRXQXl4FxiA4WITlaGJtXFOMSUg/damsuAbzanajh025UVAMS0cu80bhYqL9M4BEgKmUT0kEdNzwII7eLCsaHm2675U7LPyVlyPDCsfDOsWg6MGBjvpWr6kyjAvWxKwS11srB+08M6pkWft+D8KVfa+jpJqUt2wID+vN3XFYFOEySZotlLwN5RgvMgD+PxGJ9KG3WlUrl8KXKEqofW2Dtkh24/uPm3xa/fsucVl6je3VGL89tCGmHGXrPbRskCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAIqbaJ+xAbW0zZpm6ggXxCJeuEl/NpHNcUBIvFZaH9RAy49prPgU0/iqKoRslnuV+xasrwDM6hsu2WpXOa6UimAVWUNXCZ4OjZjhRM+r9L255FOvWvKVHoXnNjvllyEEYxOAb1s7xLHnqnER/r2v03Veh0Aaqn6HDGr13IPIL7cmkNkXoU5rE9yeQtJsVK3M+n1G3A1QLo1b3GbTDWKMvyQeXZ7EMAtzDBIbVDEKr+Qo2zHx5mFAPsfEJOmnHUWh3JKRXsdTbYc64GqgJQBjFp/9dOifaI8aNsQjKqRnOFM+3oggnKFl6znmsrkYCDzZ7d+HNKhm07ibHoUu4PYXHzg==",
    }
    dataToMerge = JSON.parse(fs.readFileSync('./test/mockspmetadatatomerge.json').toString())
    template = fs.readFileSync('./template/sp_metadata.ejs').toString()
});

test('Can render an sp metadata with ejs', () => {
        let spmetadata = ejs.render(template, {idps: dataToMerge, common});
        let currEntityIdIndexOf = spmetadata.indexOf('entityID="http://kc-local-test:8080/auth/realms/spid"')
        let currCertificateIndexOf = spmetadata.indexOf('MIIClzCCAX8CBgF27P+TPTANBgkqhkiG9w0BAQsFADAPMQ0wCwYDVQQDDARzcGlkMB4XDTIxMDExMDE1NTA0MVoXDTMxMDExMDE1NTIyMVowDzENMAsGA1UEAwwEc3BpZDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJTPNsscIS/hh7AF0Bdj/WZDcwsSJ8X4wT/PO8hh4Znh91LC9nfkDWT5GyQWwgTNvXBZLvZLoRd6mANiPq6PJQ0h+TQRXQXl4FxiA4WITlaGJtXFOMSUg/damsuAbzanajh025UVAMS0cu80bhYqL9M4BEgKmUT0kEdNzwII7eLCsaHm2675U7LPyVlyPDCsfDOsWg6MGBjvpWr6kyjAvWxKwS11srB+08M6pkWft+D8KVfa+jpJqUt2wID+vN3XFYFOEySZotlLwN5RgvMgD+PxGJ9KG3WlUrl8KXKEqofW2Dtkh24/uPm3xa/fsucVl6je3VGL89tCGmHGXrPbRskCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAIqbaJ+xAbW0zZpm6ggXxCJeuEl/NpHNcUBIvFZaH9RAy49prPgU0/iqKoRslnuV+xasrwDM6hsu2WpXOa6UimAVWUNXCZ4OjZjhRM+r9L255FOvWvKVHoXnNjvllyEEYxOAb1s7xLHnqnER/r2v03Veh0Aaqn6HDGr13IPIL7cmkNkXoU5rE9yeQtJsVK3M+n1G3A1QLo1b3GbTDWKMvyQeXZ7EMAtzDBIbVDEKr+Qo2zHx5mFAPsfEJOmnHUWh3JKRXsdTbYc64GqgJQBjFp/9dOifaI8aNsQjKqRnOFM+3oggnKFl6znmsrkYCDzZ7d+HNKhm07ibHoUu4PYXHzg==')

        expect(currEntityIdIndexOf).not.toBe(-1)
        expect(currCertificateIndexOf).not.toBe(-1)
    }
)
