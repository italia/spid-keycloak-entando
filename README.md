## Entando SPID Integration

###The context
Entando (https://www.entando.com/) is a modern platform for developing application in cloud native scenarios, using best practices for the software application architecture and the development.
It uses keycloak (https://www.keycloak.org/) as identity access manager

###The needs
Easily allow users to use Italian SPID identity providers (https://www.spid.gov.it/) to authenticate themselves in Entando applications 


###The solution
The main solution points are:
1. using keycloak for Identity Brokering (https://www.keycloak.org/docs/latest/server_admin/index.html#_identity_broker)
   - This allows Entando to continue with Keycloak as the only IAM of the platform   
2. create a new Entando Keycloack Image with the new SPID Identity Provider Type (https://github.com/lscorcia/keycloak-spid-provider) and a new spid theme. 
   - That new type will be used in the configuration phase of the Identity Brokering
4. patch the entando installation .yaml with the new entando keycloak image
   - Entando is a cloud native platform composed of many collaborating docker containers.
   You can find the complete images list for one release, in this case the 6.3.0, there https://raw.githubusercontent.com/entando/entando-releases/v6.3.0/dist/qs/entando.yaml (look for `# Source: preview/charts/operator/templates/docker-image-info-configmap.yaml`)
   patch that with the new keycloak image and follow https://dev.entando.org/v6.3/docs/getting-started/#manual-install for the installation steps  
5. configure keycloak with the spid Identity Providers
   - We can use the keycloack spid provider configuration client to avoid manually do it (https://github.com/lscorcia/keycloak-spid-provider/wiki) 


###Create the Entando keycloak image







