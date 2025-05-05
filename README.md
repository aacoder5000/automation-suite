# Automation Test Suite

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
2. Ensure the web app is running on http://localhost:3000.

3. Run tests:
* Selenium: node tests/seleniumTests.js
* Playwright: node tests/playwrightTest.js

## Test Structure
* pages/ uses Page Object Model (POM)
* utils/ holds shared helper functions
* data/ includes test data for data-driven testing
* Screenshot of failures are saved in screenshots/

## Assumptions
* App has inputs with IDs username, password, login, new-todo, add-button, and .delete-button.
