import { BrowserRouter } from 'react-router-dom'
import AppShell from './components/layout/AppShell.jsx'
import './App.css'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './router/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppRoutes />
      </AppShell>
    </BrowserRouter>
  )
}

export default App