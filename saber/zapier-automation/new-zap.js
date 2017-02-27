const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const selector = '.webhook-url';

nightmare
  .click('div#header > div.page-header-wrapper:nth-child(1) > div.container:nth-child(1) > div.links-container.logged-in.open:nth-child(3)')
  .click('div#header > div.page-header-wrapper:nth-child(1) > div.container:nth-child(1) > div.links-container.logged-in:nth-child(3) > ul.links:nth-child(1) > li:nth-child(1) > a.button.make-a-zap-button:nth-child(1)')
  .click('div#app > div.flow-container:nth-child(1) > div.flow-container__editor.flow:nth-child(2) > div.flow-container__content.full-page-editor-content-container:nth-child(2) > div.flow-page:nth-child(1) > div.workflow.container:nth-child(1) > div.page-view:nth-child(1) > div.standalone-page.standalone-page-app:nth-child(1) > div:nth-child(1) > div.service-section-label:nth-child(5) > div.service-square.PlaceholderAPI64x64.WebHookAPI64x64:nth-child(10)')
  .click('div#app > div.flow-container:nth-child(1) > div.flow-container__editor.flow:nth-child(2) > div.flow-container__content.full-page-editor-content-container:nth-child(2) > div.flow-page:nth-child(1) > div.workflow.container:nth-child(1) > div.page-view:nth-child(1) > div.standalone-page.standalone-page-action:nth-child(1) > div:nth-child(1) > div.action-selector:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.action.row:nth-child(2)')
  .click('div#app > div.flow-container:nth-child(1) > div.flow-container__editor.flow:nth-child(2) > div.flow-container__content.full-page-editor-content-container:nth-child(2) > div.flow-page:nth-child(1) > div.workflow.container:nth-child(1) > div.page-view:nth-child(1) > div.standalone-page.standalone-page-action:nth-child(1) > div:nth-child(1) > p.action-button:nth-child(3) > button.big.secondary:nth-child(1)')
  .click('div#app > div.flow-container:nth-child(1) > div.flow-container__editor.flow:nth-child(2) > div.flow-container__content.full-page-editor-content-container:nth-child(2) > div.flow-page:nth-child(1) > div.workflow.container:nth-child(1) > div.page-view:nth-child(1) > div.standalone-page.standalone-page-fields:nth-child(1) > div:nth-child(1) > div.flowform:nth-child(2) > div.root-node-fields:nth-child(2) > p.action-button:nth-child(3) > button.big.secondary:nth-child(1)')
    .evaluate(function(selector) {
      return document.querySelector(selector).innerText;
    }, selector)
    .then(function(text) {
      console.log(text);
    })
  .catch(function (error) {
    console.error('Error:', error);
  });
