import { useMemo } from 'react'
import StatCard from '../components/ui/StatCard.jsx'
import SpendingTrendChart from '../components/dashboard/SpendingTrendChart.jsx'
import SpendingByCategoryChart from '../components/dashboard/SpendingByCategoryChart.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { COLUMN_DEFS, CATEGORIES_STORAGE_KEY } from '../constants/categoryColumns.js'
import { SEED_CATEGORIES, SEED_TRANSACTIONS } from '../constants/seedData.js'
import { currentMonthKey } from '../utils/dateUtils.js'


function DashboardView() {
  const [categories] = useLocalStorage(CATEGORIES_STORAGE_KEY, SEED_CATEGORIES)
  const [transactionsByMonth] = useLocalStorage('budgettracker.transactions', SEED_TRANSACTIONS)

  const monthKey = currentMonthKey()
  const monthTransactions = transactionsByMonth[monthKey] || []

  const stats = useMemo(() => {
    const totalBalance = (categories.Cash || []).reduce(
      (sum, acc) => sum + parseFloat(acc.balance || 0), 0
    )

    const spendingCategories = ['Expenses', 'Bills']
    const monthSpending = monthTransactions
      .filter((tx) => spendingCategories.includes(tx.category))
      .reduce((sum, tx) => sum + parseFloat(tx.amount || 0), 0)

    const monthIncome = monthTransactions
      .filter((tx) => tx.category === 'Income')
      .reduce((sum, tx) => sum + parseFloat(tx.amount || 0), 0)

    const totalExpenseBudget = (categories.Expenses || []).reduce(
      (sum, exp) => sum + parseFloat(exp.budget || 0), 0
    )
    const expenseSpent = monthTransactions
      .filter((tx) => tx.category === 'Expenses')
      .reduce((sum, tx) => sum + parseFloat(tx.amount || 0), 0)
    const budgetRemaining = totalExpenseBudget - expenseSpent
    const percentUsed = totalExpenseBudget > 0
      ? Math.round((expenseSpent / totalExpenseBudget) * 100)
      : 0

    return { totalBalance, monthSpending, monthIncome, budgetRemaining, percentUsed }
  }, [categories, monthTransactions])

  const trendData = useMemo(() => {
    const byDay = {}
    monthTransactions
      .filter((tx) => tx.category === 'Expenses' || tx.category === 'Bills')
      .forEach((tx) => {
        const day = tx.date?.split('-')[2] || '?'
        byDay[day] = (byDay[day] || 0) + parseFloat(tx.amount || 0)
      })
    return Object.entries(byDay)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([day, amount]) => ({ day, amount: Math.round(amount * 100) / 100 }))
  }, [monthTransactions])

  const categoryBreakdown = useMemo(() => {
    const byCategory = {}
    monthTransactions
      .filter((tx) => tx.category === 'Expenses')
      .forEach((tx) => {
        byCategory[tx.subcategory] = (byCategory[tx.subcategory] || 0) + parseFloat(tx.amount || 0)
      })
    return Object.entries(byCategory).map(([name, value]) => ({
      name,
      value: Math.round(value * 100) / 100,
    }))
  }, [monthTransactions])

  return (
    <div>
      <h1 id="component-view-title">Dashboard</h1>

      <div className="stat-row">
        <StatCard label="Total Balance" value={`$${stats.totalBalance.toFixed(2)}`} />
        <StatCard label="This Month's Spending" value={`$${stats.monthSpending.toFixed(2)}`} />
        <StatCard
          label="Income vs Expenses"
          value={`$${stats.monthIncome.toFixed(2)} / $${stats.monthSpending.toFixed(2)}`}
        />
        <StatCard
          label="Budget Remaining"
          value={`$${stats.budgetRemaining.toFixed(2)}`}
          trend={{ direction: stats.percentUsed > 80 ? 'up' : 'down', text: `${stats.percentUsed}% used` }}
        />
      </div>

      <div className="chart-row">
        <SpendingTrendChart data={trendData} />
        <SpendingByCategoryChart data={categoryBreakdown} />
      </div>
    </div>
  )
}

export default DashboardView