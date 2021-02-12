<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
            "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="robots" content="noindex, nofollow">

        <title>${msg("loginTitle",(realm.displayName!''))}</title>
        <link href="${url.resourcesPath}/img/favicon-entando.png" rel="icon"/>
        <link href="${url.resourcesPath}/css/login.css" rel="stylesheet" type="text/css">
        <link href="${url.resourcesPath}/css/zocial.css" rel="stylesheet" type="text/css">
        <link href="${url.resourcesPath}/css/spid-sp-access-button.min.css" rel="stylesheet" type="text/css">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>

    <body>
    <div class="LoginPage">
        <div class="LoginPage__formWrapper">
            <div class="LoginPage__brand">
                <div class="LoginPage__logo"></div>
                <div class="LoginPage__description">${msg("entandoUxBrandDescription")}</div>
            </div>
                <#if social.providers??>
                    <div>
                <#--
                            <div id="social-providers">
                              <div id="kc-social-providers">
                                <ul class="list horizontal">
                                  <#list social.providers as p>
                                    <li><a href="${p.loginUrl}" id="zocial-${p.alias}" class="button zocial ${p.providerId}">${p.displayName}</a></li>
                                  </#list>
                                </ul>
                              </div>
                            </div>
                -->
                    <a href="#" class="italia-it-button italia-it-button-size-s button-spid" spid-idp-button="#spid-idp-button-small-get" aria-haspopup="true" aria-expanded="false">
                        <span class="italia-it-button-icon"><img src="${url.resourcesPath}/img/spid-ico-circle-bb.svg" onerror="this.src='img/spid-ico-circle-bb.png'; this.onerror=null;" alt="" /></span>
                        <span class="italia-it-button-text">Entra con SPID</span>
                    </a>
                    <div id="spid-idp-button-small-get" class="spid-idp-button spid-idp-button-tip spid-idp-button-relative">
                        <ul id="spid-idp-list-small-root-get" class="spid-idp-button-menu" aria-labelledby="spid-idp">
                            <li class="spid-idp-button-link" id="arubaid" data-idp="arubaid">
                                <a href="#"><span class="spid-sr-only">Aruba ID</span><img src="${url.resourcesPath}/img/spid-idp-arubaid.svg" onerror="this.src='img/spid-idp-arubaid.png'; this.onerror=null;" alt="Aruba ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="infocertid" data-idp="infocertid">
                                <a href="#"><span class="spid-sr-only">Infocert ID</span><img src="${url.resourcesPath}/img/spid-idp-infocertid.svg" onerror="this.src='img/spid-idp-infocertid.png'; this.onerror=null;" alt="Infocert ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="intesaid" data-idp="intesaid">
                                <a href="#"><span class="spid-sr-only">Intesa ID</span><img src="${url.resourcesPath}/img/spid-idp-intesaid.svg" onerror="this.src='img/spid-idp-intesaid.png'; this.onerror=null;" alt="Intesa ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="lepidaid" data-idp="lepidaid">
                                <a href="#"><span class="spid-sr-only">Lepida ID</span><img src="${url.resourcesPath}/img/spid-idp-lepidaid.svg" onerror="this.src='img/spid-idp-lepidaid.png'; this.onerror=null;" alt="Lepida ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="namirialid" data-idp="namirialid">
                                <a href="#"><span class="spid-sr-only">Namirial ID</span><img src="${url.resourcesPath}/img/spid-idp-namirialid.svg" onerror="this.src='img/spid-idp-namirialid.png'; this.onerror=null;" alt="Namirial ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="posteid" data-idp="posteid">
                                <a href="#"><span class="spid-sr-only">Poste ID</span><img src="${url.resourcesPath}/img/spid-idp-posteid.svg" onerror="this.src='img/spid-idp-posteid.png'; this.onerror=null;" alt="Poste ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="sielteid" data-idp="sielteid">
                                <a href="#"><span class="spid-sr-only">Sielte ID</span><img src="${url.resourcesPath}/img/spid-idp-sielteid.svg" onerror="this.src='img/spid-idp-sielteid.png'; this.onerror=null;" alt="Sielte ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="spiditalia" data-idp="spiditalia">
                                <a href="#"><span class="spid-sr-only">SPIDItalia Register.it</span><img src="${url.resourcesPath}/img/spid-idp-spiditalia.svg" onerror="this.src='img/spid-idp-spiditalia.png'; this.onerror=null;" alt="SpidItalia" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="timid" data-idp="timid">
                                <a href="#"><span class="spid-sr-only">Tim ID</span><img src="${url.resourcesPath}/img/spid-idp-timid.svg" onerror="this.src='img/spid-idp-timid.png'; this.onerror=null;" alt="Tim ID" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="spid-test-saml-check" data-idp="spid-test-saml-check">
                                <a href="#"><span class="spid-sr-only">spid-test-saml-check</span><img src="" alt="spid-test-saml-check" /></a>
                            </li>
                            <li class="spid-idp-button-link" id="spid-testenv2" data-idp="spid-testenv2">
                                <a href="#"><span class="spid-sr-only">spid-testenv2</span><img src="" alt="spid-testenv2" /></a>
                            </li>
                            <li class="spid-idp-support-link">
                                <a href="https://www.spid.gov.it">Maggiori informazioni</a>
                            </li>
                            <li class="spid-idp-support-link">
                                <a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a>
                            </li>
                            <li class="spid-idp-support-link">
                                <a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>
                            </li>
                        </ul>
                    </div>
                    <script src="${url.resourcesPath}/js/jquery.min.js"></script>
                    <script src="${url.resourcesPath}/js/spid-sp-access-button.min.js"></script>
                    <script>
                        $(document).ready(function () {
                            var rootList = $("#spid-idp-list-small-root-get");
                            var idpList = rootList.children(".spid-idp-button-link");
                            var lnkList = rootList.children(".spid-idp-support-link");
                            while (idpList.length) {
                                rootList.append(idpList.splice(Math.floor(Math.random() * idpList.length), 1)[0]);
                            }
                            rootList.append(lnkList);
                        });

                    </script>

                    <script>
                        window.spidproviders={
                            <#list social.providers as p>
                            "${p.alias}": "${p.loginUrl?no_esc}",
                            </#list>
                        }

                        window.spidprovidermatch = {
                            "spid-testenv2": "spid-testenv2",
                            "spid-test-saml-check": "spid-test-saml-check",
                            "SPIDItalia Register.it": "spiditalia",
                            "Aruba ID": "arubaid",
                            "Poste ID": "posteid",
                            "Sielte ID": "sielteid",
                            "Tim ID": "timid",
                            "Lepida ID": "lepidaid",
                            "Infocert ID": "infocertid",
                            "Namirial ID": "namirialid",
                            "Intesa ID": "intesaid",
                        }
                        $(document).ready(function(){
                            for (const [key, value] of Object.entries(spidprovidermatch)) {
                                const url = spidproviders[key]
                                let currElem = $("#"+value+" a")[0]
                                console.log("url:"+url+" id:"+value);
                                if(url !==undefined && currElem!==undefined){
                                    currElem.href = url
                                }
                            }
                        });

                    </script>
            </div>

                </#if>
            <#nested "form">
            <#assign aDateTime = .now>
            <#assign aDate = aDateTime?date>
            <div class="LoginPage__copyright">${msg("copyright")} ${aDate?string.yyyy} <a
                        href="https://www.entando.com/" class="LoginPage__url">Entando</a></div>
        </div>
    </div>


    </body>


    </html>
</#macro>
