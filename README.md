# Expense-Tracker

# Expense Tracker API

A simple Node.js API to log, retrieve, and analyze personal expenses.

## Features

- Add a new expense with details such as category, amount, and date.
- Retrieve expenses filtered by category or date range.
- Analyze spending patterns (e.g., highest spending category, monthly totals).
- Automatically generate daily, weekly, or monthly summary reports.

## Endpoints

### 1. Add Expense
- **POST** `/expenses`
- **Request Body**:
  ```json
  {
    "category": "Food",
    "amount": 50,
    "date": "2024-12-04"
  }
### 2. Get Expenses
Method: GET
Endpoint: /expenses
Description: Retrieves expenses with optional filters for category or date range.
Query Parameters:
category (optional): Filter by expense category (e.g., "Food").
startDate (optional): Start date in YYYY-MM-DD format.
endDate (optional): End date in YYYY-MM-DD format.
Example Request:
#  GET /expenses?category=Food&startDate=2024-12-01&endDate=2024-12-04

### 3. Analyze Spending
Method: GET
Endpoint: /expenses/analysis
Description: Analyzes spending patterns, such as total expenses by category and monthly totals.

### 3. Automated Daily Summary
Method: Automated (using node-cron)
Description: Automatically generates and logs daily expense summaries at midnight.
Logic: A placeholder in your code, which can be updated to save or send daily summaries.

