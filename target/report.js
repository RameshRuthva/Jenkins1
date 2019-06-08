$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddTariffJenkins.feature");
formatter.feature({
  "name": "To add test tariff plan hooks jenkins",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify the message hooks jenkins",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "The user in tariff plan hooks jenkins",
  "keyword": "Given "
});
formatter.step({
  "name": "The enter valid details hooks jenkins \"\u003cMntrental\u003e\",\"\u003cFreeloc\u003e\",\"\u003cFreeInte\u003e\",\"\u003cFreesms\u003e\",\"\u003cloccharge\u003e\",\"\u003cintcharge\u003e\",\"\u003csmscharge\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user click the submit button hooks jenkins",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see message hooks jenkins",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Mntrental",
        "Freeloc",
        "FreeInte",
        "Freesms",
        "loccharge",
        "intcharge",
        "smscharge"
      ]
    },
    {
      "cells": [
        "44",
        "87",
        "15",
        "14",
        "10",
        "6",
        "4"
      ]
    },
    {
      "cells": [
        "45",
        "76",
        "15",
        "14",
        "10",
        "6",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the message hooks jenkins",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user in tariff plan hooks jenkins",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_user_in_tariff_plan_hooks_jenkins()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The enter valid details hooks jenkins \"44\",\"87\",\"15\",\"14\",\"10\",\"6\",\"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_enter_valid_details_hooks_jenkins(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit button hooks jenkins",
  "keyword": "And "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_user_click_the_submit_button_hooks_jenkins()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see message hooks jenkins",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_user_should_see_message_hooks_jenkins()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the message hooks jenkins",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user in tariff plan hooks jenkins",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_user_in_tariff_plan_hooks_jenkins()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The enter valid details hooks jenkins \"45\",\"76\",\"15\",\"14\",\"10\",\"6\",\"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_enter_valid_details_hooks_jenkins(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit button hooks jenkins",
  "keyword": "And "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_user_click_the_submit_button_hooks_jenkins()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see message hooks jenkins",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksJenkinsLocator.the_user_should_see_message_hooks_jenkins()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});