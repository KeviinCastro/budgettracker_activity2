import { useState } from 'react'
import MonthTabs, { MONTHS } from '../components/transactions/MonthTabs.jsx'
import TransactionsTable from '../components/transactions/TransactionsTable.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { SEED_TRANSACTIONS } from '../constants/seedData.js'

import { currentMonthKey } from '../utils/dateUtils.js'


import { COLUMN_DEFS, CATEGORIES_STORAGE_KEY } from '../constants/categoryColumns.js'

// function currentMonthKey() {
//   const now = new Date()
//   return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
// }

function TransactionsView() {
  const year = new Date().getFullYear()
  const [activeMonth, setActiveMonth] = useState(currentMonthKey())

  const [categories] = useLocalStorage(
    CATEGORIES_STORAGE_KEY,
    Object.fromEntries(COLUMN_DEFS.map((col) => [col.key, []]))
  )

  const [transactionsByMonth, setTransactionsByMonth] = useLocalStorage(
    'budgettracker.transactions',
     SEED_TRANSACTIONS
  )

  const monthTransactions = transactionsByMonth[activeMonth] || []

  function handleAdd(tx) {
    setTransactionsByMonth((prev) => ({
      ...prev,
      [activeMonth]: [...(prev[activeMonth] || []), tx],
    }))
  }

  function handleRemove(index) {
    setTransactionsByMonth((prev) => ({
      ...prev,
      [activeMonth]: prev[activeMonth].filter((_, i) => i !== index),
    }))
  }

  return (
    <div>
      <h1 id="component-view-title">Transactions</h1>
      <MonthTabs year={year} activeMonth={activeMonth} onSelect={setActiveMonth} />
      <TransactionsTable
        transactions={monthTransactions}
        categories={categories}
        defaultDate={`${activeMonth}-01`}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default TransactionsView