
@tag
Feature: To add test tariff plan hooks jenkins
 

  @tag2 @us1 @regression
  Scenario Outline: To verify the message hooks jenkins
     Given The user in tariff plan hooks jenkins
    When The enter valid details hooks jenkins "<Mntrental>","<Freeloc>","<FreeInte>","<Freesms>","<loccharge>","<intcharge>","<smscharge>"
    And The user click the submit button hooks jenkins
    Then The user should see message hooks jenkins

    Examples: 
      | Mntrental | Freeloc | FreeInte | Freesms | loccharge | intcharge | smscharge |
      |        44 |      87 |       15 |      14 |        10 |         6 |         4 |
      |        45 |      76 |       15 |      14 |        10 |         6 |         4 |