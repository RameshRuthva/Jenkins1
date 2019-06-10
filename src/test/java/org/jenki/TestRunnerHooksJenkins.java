package org.jenki;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Feature/AddTariffJenkins.feature",dryRun=false,strict=true,monochrome=true,tags= {"@us1","@regression"},glue="org.jenki",plugin= {"json:src/test/resources/report.json"})


public class TestRunnerHooksJenkins 
{

	
}
