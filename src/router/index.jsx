import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const DashboardView = lazy(() => import('../views/DashboardView.jsx'))
const CategoriesView = lazy(() => import('../views/CategoriesView.jsx'))
const TransactionsView = lazy(() => import('../views/TransactionsView.jsx'))
const MonthsView = lazy(() => import('../views/MonthsView.jsx'))

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
         <Route path="/" element={<Navigate to="/dashboard" replace />} />
         <Route path="/dashboard" element={<DashboardView />} />
         <Route path="/categories" element={<CategoriesView />} />
        <Route path="/transactions" element={<TransactionsView />} />
         <Route path="/months/:year?/:month?" element={<MonthsView />} />
     </Routes>
     </Suspense>
  )
}

 export default AppRoutes