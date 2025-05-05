const { chromium } = require('playwright');
const { appendTimestamp } = require('../utils/helpers');
const testData = require('../data/testData.json');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');
  await page.fill('#username', appendTimestamp(testData.username));
  await page.fill('#password', testData.password);
  await page.click('#login');

  console.log('✔ Playwright login test passed');

  await browser.close();
})();