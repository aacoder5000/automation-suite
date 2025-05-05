const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const LoginPage = require('../pages/loginPage');
const { appendTimestamp } = require('../utils/helpers');
const testData = require('../data/testData.json');

(async function runSeleniumTests() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log('Starting Selenium Test Suite...');
    await driver.get('http://localhost:3000'); //change url for the actual url if not being tested in localhost

    // Login Test
    const loginPage = new LoginPage(driver);
    const uniqueUsername = appendTimestamp(testData.username);
    await loginPage.login(uniqueUsername, testData.password);
    console.log('✔ Login test passed');

    // Add Item Test
    const todoInput = By.id('new-todo');
    const addButton = By.id('add-button');
    await driver.wait(until.elementLocated(todoInput), 5000);
    await driver.findElement(todoInput).sendKeys('Learn Selenium');
    await driver.findElement(addButton).click();
    console.log('✔ Add item test passed');

    // Delete Item Test
    const deleteButton = By.css('.delete-button');
    await driver.wait(until.elementLocated(deleteButton), 5000);
    await driver.findElement(deleteButton).click();
    console.log('✔ Delete item test passed');

  } catch (err) {
    console.error('❌ Test failed:', err.message);
    const screenshot = await driver.takeScreenshot();
    const filename = `screenshots/failure_${Date.now()}.png`;
    fs.writeFileSync(filename, screenshot, 'base64');
    console.log(`📸 Screenshot saved to ${filename}`);
  } finally {
    await driver.quit();
  }
})();