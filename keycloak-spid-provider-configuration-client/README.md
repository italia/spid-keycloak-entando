# Configuration Client
It allows the configuration of a keycloak instance with the https://github.com/lscorcia/keycloak-spid-provider plugin already installed 

## requirements
* node
* npm

## Configuration
```
npm install
```

copy .env-example into .env, configure it and wipe out the comments (check .env-local and .env-remote for hints)

```
npm run create-realm 
```
builds a pre configured realm (with the right Authenticator) **'WARNING: DON'T USE IT FOR ENTANDO PLATFORM KEYCLOAK BUT ONLY FOR STANDALONE INSTALLATIONS'**

```
npm run create-idps
```
downloads the metadata from the Official Url and build all the spid identity providers in keycloak. It creates also all the suggested mappers (see the main wiki).

If you have a spid test idP (https://github.com/italia/spid-testenv2) deployed somewhere, you can enable the configuration of the keycloak identity provider, setting the following .env file properties

```
createSpidTestIdP = true 
spidTestIdPAlias = spid-testenv2
spidTestIdPMetadataURL = http://localhost:8088/metadata
```

You can use the same properties to configure the Official Spid Validator https://github.com/italia/spid-saml-check 

```
createSpidValidatorIdP=true
spidValidatorIdPAlias=spid-test-saml-check
spidValidatorIdPMetadataURL=http://localhost:9080/metadata.xml
```

It is possible generate the service provider metadata using
```
npm run create-sp
```
it will create a new spmetadata.xml file in the root folder


This project is released under the Apache License 2.0, same as the main Keycloak
package.
