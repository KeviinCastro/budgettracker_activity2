import Sidebar from './Sidebar.jsx'

function AppShell({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
      
  )
}

export default AppShell