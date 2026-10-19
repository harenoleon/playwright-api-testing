# Playwright API CRUD Testing

## Project Overview

This project demonstrates API testing using **Playwright** and **TypeScript**. It focuses on validating CRUD operations and verifying API responses.

## Tech Stack

- Playwright
- TypeScript
- REST API
- GitHub

## Test Scope

The API CRUD test covers the following operations:

- **Create (POST):** Create a new object and validate the response.
- **Read (GET):** Retrieve the created object and verify its data.
- **Update (PUT):** Update the object and validate the updated values.
- **Delete (DELETE):** Delete the object and verify that it is no longer available.

## API Under Test

- Base URL: `https://api.restful-api.dev`
- Endpoint: `/objects`

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

## Known Limitations

The public API may enforce request limits. Test execution can fail when the API quota is exhausted or the service is unavailable.

## Project Status

This project is a work in progress. Test coverage and documentation may be expanded as the project develops.
