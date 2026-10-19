# Playwright API CRUD Testing

## Project Overview

This project demonstrates API testing using **Playwright** and **TypeScript**. It focuses on validating CRUD operations, verifying API responses, and exploring negative test scenarios.

## Tech Stack

- Playwright
- TypeScript
- REST API
- Git and GitHub
- Google Sheets for test documentation

## Test Scope

The API CRUD test covers the following operations:

- **Create (POST):** Create a new object and validate the response.
- **Read (GET):** Retrieve the created object and verify its data.
- **Update (PUT):** Update the object and validate the updated values.
- **Delete (DELETE):** Delete the object and verify that it is no longer available.
- **Negative Testing:** Explore API behavior when unexpected or invalid data is submitted.

## Test Documentation

Test cases and test documentation are maintained in Google Sheets.

📊 **[View API Test Cases & Test Results](https://docs.google.com/spreadsheets/d/10xhRSTjW_b66uk0o41ztSwbTVJa8BHk7YVhCqvFH1_8/edit?usp=sharing)**

The documentation includes test scenarios, expected results, and negative testing coverage.

## API Under Test

- **Base URL:** `https://api.restful-api.dev`
- **Endpoint:** `/objects`

## How to Run

### Prerequisites

- Node.js
- npm
- Playwright

### Setup

Clone the repository:

```bash
git clone https://github.com/harenoleon/playwright-api-testing.git
cd playwright-api-testing
```

Install dependencies:

```bash
npm install
```

Run the API CRUD test:

```bash
npx playwright test tests/apiCRUD.spec.ts
```

## Validation

The test validates HTTP response status codes, object IDs, object properties, updated values, and deletion behavior.

Negative test scenarios are used to explore how the API responds to unexpected or invalid input. Actual API behavior should be compared with the expected behavior before reporting a defect.

## Known Limitations

- The public API may enforce request limits. Test execution can fail when the API quota is exhausted or the service is unavailable.
- API responses may vary depending on the service's current behavior.
- Test coverage may not include every possible validation or error-handling scenario.

## Project Status

This project is a work in progress. Test coverage and documentation may be expanded as the project develops.
