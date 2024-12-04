const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const app = express();
app.use(bodyParser.json());

let expenses = [];
const validCategories = ["Food", "Travel", "Utilities", "Entertainment"];

app.post('/expenses', (req, res) => {
  const { category, amount, date } = req.body;
  if (!validCategories.includes(category)) {
    return res.json({ status: "error", data: null, error: "Invalid category" });
  }
  if (amount <= 0) {
    return res.json({ status: "error", data: null, error: "Amount must be positive" });
  }
  expenses.push({ category, amount, date });
  res.json({ status: "success", data: "Expense added successfully", error: null });
});

app.get('/expenses', (req, res) => {
  const { category, startDate, endDate } = req.query;
  let filtered = expenses;
  if (category) filtered = filtered.filter(exp => exp.category === category);
  if (startDate && endDate) {
    filtered = filtered.filter(
      exp => new Date(exp.date) >= new Date(startDate) && new Date(exp.date) <= new Date(endDate)
    );
  }
  res.json({ status: "success", data: filtered, error: null });
});

app.get('/expenses/analysis', (req, res) => {
  const totalByCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});
  const monthlyTotals = expenses.reduce((acc, exp) => {
    const month = exp.date.slice(0, 7);
    acc[month] = (acc[month] || 0) + exp.amount;
    return acc;
  }, {});
  const highestCategory = Object.keys(totalByCategory).reduce((a, b) =>
    totalByCategory[a] > totalByCategory[b] ? a : b
  );
  res.json({
    status: "success",
    data: { totalByCategory, monthlyTotals, highestCategory },
    error: null
  });
});

cron.schedule('0 0 * * *', () => {
  console.log("Generating daily summary...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
