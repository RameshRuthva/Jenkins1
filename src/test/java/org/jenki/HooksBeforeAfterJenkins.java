package org.jenki;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksBeforeAfterJenkins 
{

	static WebDriver driver;
	
@Before
public static void method1()
{
  // System.out.println("before hooks");
   
   System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ramesh\\eclipse-workspace -Selenium\\9.33-Cucumber-1\\driver\\chromedriver.exe");
   driver=new ChromeDriver();
   driver.get("http://demo.guru99.com/telecom/");
  

}
 	
@After
public static void method2()
{
	//System.out.println("after hooks");

	driver.close();
	driver.quit();
}
}
