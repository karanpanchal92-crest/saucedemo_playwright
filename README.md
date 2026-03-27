# SauceDemo E2E Test Automation

An end-to-end test automation framework for SauceDemo using Playwright and TypeScript, implementing the Page Object Model design pattern with custom fixtures.

## 📋 Overview

This project demonstrates automated testing of the SauceDemo e-commerce application's checkout workflow. It features:

- **Playwright Test Framework** with TypeScript for type safety
- **Page Object Model (POM)** architecture for maintainable test code
- **Custom Test Fixtures** for authenticated user sessions
- **Environment-based Configuration** using dotenv
- **Multi-browser Support** (Chromium, Firefox, WebKit)

## 🧪 Test Coverage

The test suite validates the following user journey:

1. **User Authentication** - Login with valid credentials
2. **Product Selection** - Add items to the shopping cart
3. **Cart Verification** - Verify items appear in cart correctly
4. **Checkout Availability** - Confirm checkout button is accessible

## 🏗️ Project Structure

```
saucedemo-playwright/
├── pages/                      # Page Object Models
│   ├── LoginPage.ts           # Login page interactions
│   ├── InventoryPage.ts       # Product inventory operations
│   └── CheckoutPage.ts        # Shopping cart & checkout
├── fixtures/                   # Custom test fixtures
│   └── test-fixtures.ts       # Authenticated session fixtures
├── tests/                      # Test specifications
│   └── saucedemo_checkout.spec.ts
├── playwright.config.ts        # Playwright configuration
├── .env.example               # Environment variables template
└── package.json               # Project dependencies
```

## 🛠️ Prerequisites

Before running the tests, ensure you have:

- **Node.js** version 18 or higher
- **npm** (comes with Node.js)

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   cd saucedemo-playwright
   ```

2. **Install project dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright browsers:**

   ```bash
   npx playwright install
   ```

4. **Configure environment variables:**

   Create a `.env` file in the project root:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your test credentials:

   ```env
   TEST_USERNAME=standard_user
   TEST_PASSWORD=secret_sauce
   BASE_URL=https://www.saucedemo.com
   ```

## ▶️ Running Tests

Execute the complete test suite:

```bash
npx playwright test
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run tests on a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/saucedemo_checkout.spec.ts
```

## 📊 Test Reports

After test execution, view the HTML report:

```bash
npx playwright show-report
```

The report includes:

- Test execution results
- Screenshots and videos (on failure)
- Trace files for debugging
- Execution timeline

## 🔧 Configuration

The `playwright.config.ts` file includes:

- **Base URL**: Configurable via environment variable
- **Parallel Execution**: Tests run in parallel by default
- **Retry Logic**: Automatic retries on CI environments
- **Trace Collection**: Enabled on first retry for debugging
- **Test ID Attribute**: Uses `data-test` for element selection

## 📝 Page Object Model

### LoginPage
Handles user authentication with methods:
- `login(username, password)` - Performs login operation
- `goto()` - Navigates to login page

### InventoryPage
Manages product inventory interactions:
- `get_inventory_item_by_name(name)` - Finds product by name
- `add_inventory_item_to_cart(itemName)` - Adds product to cart

### CheckoutPage
Handles cart and checkout operations:
- `goto()` - Navigates to shopping cart
- `fetch_item_by_name(name)` - Retrieves cart item by name
- `is_checkout_button_visible()` - Verifies checkout availability

## 🔐 Custom Fixtures

The project uses custom fixtures for test setup:

- **loginPage**: Automatically logs in before each test
- **authenticatedInventoryPage**: Provides authenticated inventory page access
- **authenticatedCartPage**: Provides authenticated cart page access

This approach eliminates repetitive login code and maintains clean test specifications.

## 🎯 Best Practices Implemented

- ✅ Page Object Model for code reusability
- ✅ TypeScript for type safety and better IDE support
- ✅ Environment variables for sensitive data
- ✅ Custom fixtures for test setup automation
- ✅ Descriptive test steps for better reporting
- ✅ Explicit waits and assertions
- ✅ Multi-browser testing support

## 📂 Generated Artifacts

The following directories are auto-generated and git-ignored:

- `playwright-report/` - HTML test reports
- `test-results/` - Test execution artifacts
- `node_modules/` - Project dependencies

## 🤝 Contributing

When adding new tests:

1. Create page objects for new pages in `pages/` directory
2. Add test specifications in `tests/` directory
3. Update fixtures if new authentication flows are needed
4. Follow existing naming conventions and code style

## 📄 License

ISC

## 👤 Author

Karan Panchal

---

**Note**: This project is for educational and demonstration purposes, showcasing automated testing capabilities with Playwright and TypeScript.
