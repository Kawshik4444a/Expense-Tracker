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
