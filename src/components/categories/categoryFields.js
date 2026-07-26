export const CATEGORY_FIELDS = {
  Cash: [
    { name: 'name', label: 'Account Name', type: 'text' },
    { name: 'balance', label: 'Current Balance', type: 'number', prefix: '$' },
  ],
  Credit: [
    { name: 'name', label: 'Card Name', type: 'text' },
    { name: 'balance', label: 'Current Balance Owed', type: 'number', prefix: '$' },
    { name: 'limit', label: 'Credit Limit', type: 'number', prefix: '$' },
    { name: 'dueDate', label: 'Payment Due Date', type: 'date' },
  ],
  Savings: [
    { name: 'name', label: 'Savings Goal Name', type: 'text' },
    { name: 'goalAmount', label: 'Goal Amount', type: 'number', prefix: '$' },
    { name: 'targetDate', label: 'Target Date', type: 'date' },
  ],
  Income: [
    { name: 'name', label: 'Income Source', type: 'text' },
    { name: 'amount', label: 'Amount', type: 'number', prefix: '$' },
    { name: 'payDate', label: 'Expected Pay Date', type: 'date' },
  ],
  Expenses: [
    { name: 'name', label: 'Expense Category', type: 'text' },
    { name: 'budget', label: 'Monthly Budget', type: 'number', prefix: '$' },
    { name: 'paymentMethod', label: 'Pay With', type: 'select', options: ['Cash', 'Credit'] },
  ],
  Bills: [
    { name: 'name', label: 'Bill Name', type: 'text' },
    { name: 'amount', label: 'Amount', type: 'number', prefix: '$' },
    { name: 'dueDate', label: 'Due Date', type: 'date' },
    { name: 'paymentMethod', label: 'Pay With', type: 'select', options: ['Cash', 'Credit'] },
  ],
  Investments: [
    { name: 'name', label: 'Investment Name', type: 'text' },
    { name: 'type', label: 'Investment Type', type: 'select', options: ['Retirement', 'Crypto', 'Market', 'Other'] },
    { name: 'amount', label: 'Contribution Amount', type: 'number', prefix: '$' },
  ],
  Debts: [
    { name: 'name', label: 'Debt Name', type: 'text' },
    { name: 'balance', label: 'Current Amount Owed', type: 'number', prefix: '$' },
    { name: 'dueDate', label: 'Due Date', type: 'date' },
    { name: 'interestRate', label: 'Interest Rate', type: 'number', suffix: '%' },
  ],
}