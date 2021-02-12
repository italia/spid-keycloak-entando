const fs = require('fs')
const parser = require('../src/spmetadataparser')

let toParse = '';
beforeAll(() => {
    toParse = fs.readFileSync('./test/mockspmetadata-descriptor.xml').toString()
});

test('Can get the assertionCustomerservice token from the (mocked) partial keycloak metadata', () => {
    let result = parser.getAssertionConsumerServiceToken(toParse, "2")
    let expectedResult = `<md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
                                     Location="https://quickstart-kc-spide6.okd-entando.org/auth/realms/entando/broker/Lepida%20ID/endpoint"
                                      index="2"/>`
    expect(result).toBe(expectedResult)
})

test('Can get the assertionCustomerservice token from the (mocked) partial keycloak metadata and set the correct isDefault', () => {
    let result = parser.getAssertionConsumerServiceToken(toParse, "0")
    let expectedResult = `<md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
                                     Location="https://quickstart-kc-spide6.okd-entando.org/auth/realms/entando/broker/Lepida%20ID/endpoint"
                                      index="0" isDefault="true"/>`
    expect(result).toBe(expectedResult)
})

test('Can get the singleLogoutService token from the (mocked) partial keycloak metadata', () => {
    let result = parser.getSingleLayoutServiceToken(toParse)
    let expectedResult =`<md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
                                Location="https://quickstart-kc-spide6.okd-entando.org/auth/realms/entando/broker/Lepida%20ID/endpoint"/>`
    expect(result).toBe(expectedResult)
})

test('Can get the certificate from the (mocked) partial keycloak metadata', () => {
    let result = parser.getCertificateToken(toParse)
    let expectedResult = `MIICnTCCAYUCBgF24cCl4zANBgkqhkiG9w0BAQsFADASMRAwDgYDVQQDDAdlbnRhbmRvMB4XDTIxMDEwODExMjYwN1oXDTMxMDEwODExMjc0N1owEjEQMA4GA1UEAwwHZW50YW5kbzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJFuGVqOE/9m0kGyKe9GzgwWCkxd+cU79NphsDYj8hx8nTXKS2FGOY9UOvIpaU885Ot7fW+UBN+y2Hb4hIvv7ReYXUh3qSdZqOlfTs6Yp+vWWJ3GOviJ1+hOJsv+li7pCkZlFQUo1M1C6NP8yaIzK1A9ZmkqTTl6SPufBVPA3f/MHMvnZ/uwi8lrVhBuLpP4FRjzaBls1l1k6Qu0qAMU6I69Ij9r05jOvry11cmweZd74mzr152o+HzcK4+k+vvOTPj74Nj/vGjUAmThi9fdmmuCavJXB3Ri7EvH7gvmGin9GWkj7sM3rekM+D6gFd4yoH3XZuX4RvwLZ8T2PZmngK8CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEATXjkYlLnjxX0AnNieRvNGH9jZwXEedrxOP6kK7QJLuJZ9GdPYzufofHFcxYrFxVm/5LKI6c1Ln3aI41dbGaOfBLPA0twHwuaHQP67xdIM5IcJfFPlrjAEkN+rrEcFAUfq9JygGD41GXYB8KsKXJBRayZQ0W6bgweqWbPWS8zqLXEvlGcTb0xJOvxu7FQYn2nuifBMeQpC3jdQLrMeAwQuB15gN10gfEC9aa9e8ZIJ3p6vynV0sneBpct3fWTV5NxKsMc/BKQlsbgxXz5WGWv4wM+MFILHQyVEqTxS6gNpH0JVqGYlHIW+aJdskpEdz7DG1KPUKsTCPwhlIwcvAf9CQ==`
    expect(result).toBe(expectedResult)
})