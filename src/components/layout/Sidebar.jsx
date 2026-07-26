import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Tags, ArrowLeftRight, PanelLeftClose, PanelLeftOpen, Wallet } from 'lucide-react'


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Wallet color="var(--color-accent)" />
          {!collapsed && <span className ="Title">Budget Tracker</span>}
        </div>
        <button className="collapse-toggle" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">
              <LayoutDashboard />
              {!collapsed && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">
              <Tags />
              {!collapsed && <span>Categories</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions">
              <ArrowLeftRight />
              {!collapsed && <span>Transactions</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}