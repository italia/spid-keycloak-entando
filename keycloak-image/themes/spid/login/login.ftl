<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo; section>
  <#if section = "title">
    ${msg("loginTitle",(realm.displayName!''))}
  <#elseif section = "form">
      <form class="LoginPage__form" action="${url.loginAction}" method="post">
        <div class="LoginPage__formGroup">
          <div class="LoginPage__inputGroup">
            <label class="LoginPage__label">${msg("username")}</label>
            <input type="text" name="username" tabindex="1" class="LoginPage__input" id="username" placeholder="Username" />
          </div>
          <div class="LoginPage__inputGroup extra-margin">
            <label class="LoginPage__label">${msg("password")}</label>
            <input type="password" name="password" tabindex="2" class="LoginPage__input" id="password" placeholder="Password" />
          </div>
          <#if message?has_content>
            <div class="LoginPage__error">${message.summary?no_esc}</div>
            <div class="LoginPage__actionGroup" style="margin-top: 0;">
              <div></div>
              <button class="LoginPage__button" type="submit">${msg("doLogIn")}</button>
              <div class="LoginPage__loading">
                <div class="LoginPage__spinner" />
              </div>
            </div>
          <#else>
            <div class="LoginPage__actionGroup">
              <div></div>
              <button class="LoginPage__button" type="submit">${msg("doLogIn")}</button>
              <div class="LoginPage__loading">
                <div class="LoginPage__spinner" />
              </div>
            </div>
          </#if>
        </div>
<#--
        <#list social.providers as p>
          <li><a href="${p.loginUrl}" id="zocial-${p.alias}" class="button zocial ${p.providerId}">${p.displayName}</a></li>
        </#list>
-->

      </form>
  </#if>
</@layout.registrationLayout>
