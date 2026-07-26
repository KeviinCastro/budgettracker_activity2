import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label } from 'recharts'
import Card from '../ui/Card.jsx'


function formatCurrency(value) {
  return `$${value.toLocaleString()}`
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-label">{label}</p>
      <p className="chart-tooltip-value">{formatCurrency(payload[0].value)} spent</p>
    </div>
  )
}

function SpendingTrendChart({ data }) {
  return (
    <Card title="Spending Trend">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 20 }}>
          <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" stroke="var(--color-text-secondary)" fontSize={12} tickLine={false}>
            <Label value="Day" position="insideBottom" offset={-12} fill="var(--color-text-secondary)" fontSize={12} />
          </XAxis>
          <YAxis stroke="var(--color-text-secondary)" fontSize={12} tickLine={false} tickFormatter={formatCurrency} width={60}>
            <Label value="Amount Spent" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="var(--color-text-secondary)" fontSize={12} />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="amount" name="Spending" stroke="var(--color-accent)" strokeWidth={2} dot={{ r: 3, fill: 'var(--color-accent)' }} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default SpendingTrendChart