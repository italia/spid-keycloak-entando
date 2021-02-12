const common = require('../src/common')


test('patchTemplate must patch correctly the ipmodel entityid attribute',() => {
        const idPTemplate = JSON.parse(common.patchTemplate('./template/idpmodel.json'))
        expect(idPTemplate).not.toBeNull()
        expect(idPTemplate.config.entityId).toStrictEqual(common.config.keycloakServerBaseURL+"/auth/realms/"+common.config.realm)
    }
)
