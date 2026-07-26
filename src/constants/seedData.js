export const SEED_CATEGORIES = {
  Cash: [
    { name: 'Checking Account', balance: '2450.00' },
  ],
  Credit: [
    { name: 'Visa Rewards', balance: '820.50', limit: '5000', dueDate: '2026-08-05' },
  ],
  Savings: [
    { name: 'Emergency Fund', goalAmount: '10000', targetDate: '2027-01-01' },
    { name: 'Travel Fund', goalAmount: '2000', targetDate: '2026-12-01' },
  ],
  Income: [
    { name: 'Salary', amount: '2500', payDate: '2026-07-15' },
  ],
  Expenses: [
    { name: 'Groceries', budget: '400', paymentMethod: 'Cash' },
    { name: 'Transportation', budget: '150', paymentMethod: 'Credit' },
    { name: 'Shopping', budget: '100', paymentMethod: 'Credit' },
    { name: 'Coffee', budget: '40', paymentMethod: 'Cash' },
  ],
  Bills: [
    { name: 'Electricity', amount: '95', dueDate: '2026-07-20', paymentMethod: 'Cash' },
    { name: 'Netflix', amount: '15.99', dueDate: '2026-07-10', paymentMethod: 'Credit' },
  ],
  Investments: [
    { name: '401k', type: 'Retirement', amount: '300' },
    { name: 'Bitcoin', type: 'Crypto', amount: '100' },
  ],
  Debts: [
    { name: 'Car Payment', balance: '8200', dueDate: '2026-07-25', interestRate: '4.5' },
    { name: 'Student Loan', balance: '15000', dueDate: '2026-07-28', interestRate: '5.2' },
  ],
}

export const SEED_TRANSACTIONS = {
  '2026-07': [
    { date: '2026-07-01', category: 'Income', subcategory: 'Salary', amount: '2500', notes: 'Biweekly paycheck', type: '', moneyIn: 'Checking Account', moneyOut: '' },
    { date: '2026-07-03', category: 'Expenses', subcategory: 'Groceries', amount: '85.40', notes: 'Weekly shopping', type: 'Needs', moneyIn: '', moneyOut: 'Checking Account' },
    { date: '2026-07-05', category: 'Bills', subcategory: 'Netflix', amount: '15.99', notes: '', type: 'Wants', moneyIn: '', moneyOut: 'Visa Rewards' },
    { date: '2026-07-08', category: 'Expenses', subcategory: 'Coffee', amount: '5.75', notes: '', type: 'Wants', moneyIn: '', moneyOut: 'Checking Account' },
    { date: '2026-07-10', category: 'Expenses', subcategory: 'Transportation', amount: '42.00', notes: 'Gas', type: 'Needs', moneyIn: '', moneyOut: 'Visa Rewards' },
    { date: '2026-07-12', category: 'Savings', subcategory: 'Emergency Fund', amount: '200', notes: '', type: 'Savings', moneyIn: '', moneyOut: 'Checking Account' },
    { date: '2026-07-15', category: 'Expenses', subcategory: 'Shopping', amount: '63.20', notes: 'New shoes', type: 'Wants', moneyIn: '', moneyOut: 'Visa Rewards' },
    { date: '2026-07-18', category: 'Bills', subcategory: 'Electricity', amount: '95.00', notes: '', type: 'Needs', moneyIn: '', moneyOut: 'Checking Account' },
    { date: '2026-07-20', category: 'Credit', subcategory: 'Visa Rewards', amount: '300', notes: 'Credit card payment', type: '', moneyIn: 'Visa Rewards', moneyOut: 'Checking Account' },
  ],
}