package org.jenki;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksJenkinsLocator 
{


	@Given("The user in tariff plan hooks jenkins")
	public void the_user_in_tariff_plan_hooks_jenkins() 
	{
		  HooksBeforeAfterJenkins.driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("The enter valid details hooks jenkins {string},{string},{string},{string},{string},{string},{string}")
	public void the_enter_valid_details_hooks_jenkins(String Monthlyrental, String Freeloc, String FreeInter, String Freesms, String Loccharge, String Intercharge, String smscharge) 
	{
	 	HooksBeforeAfterJenkins.driver.findElement(By.id("rental1")).sendKeys(Monthlyrental);
 	    HooksBeforeAfterJenkins.driver.findElement(By.id("local_minutes")).sendKeys(Freeloc);
 	    HooksBeforeAfterJenkins.driver.findElement(By.id("inter_minutes")).sendKeys(FreeInter);
 	    HooksBeforeAfterJenkins.driver.findElement(By.id("sms_pack")).sendKeys(Freesms);
 	    HooksBeforeAfterJenkins.driver.findElement(By.id("minutes_charges")).sendKeys(Loccharge);
 	    HooksBeforeAfterJenkins.driver.findElement(By.id("inter_charges")).sendKeys(Intercharge);
 	    HooksBeforeAfterJenkins.driver.findElement(By.id("sms_charges")).sendKeys(smscharge);
	}

	@When("The user click the submit button hooks jenkins")
	public void the_user_click_the_submit_button_hooks_jenkins()
	{
		 HooksBeforeAfterJenkins.driver.findElement(By.name("submit")).click();
	}

	@Then("The user should see message hooks jenkins")
	public void the_user_should_see_message_hooks_jenkins() 
	{
		 Assert.assertTrue(HooksBeforeAfterJenkins.driver.findElement(By.tagName("h2")).isDisplayed());
	}
}
