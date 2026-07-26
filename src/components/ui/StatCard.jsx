import Card from './Card.jsx'


export default function StatCard({ label, value, trend }) {
  return (
    <Card>
      <div className="stat-card">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
        {trend && (
          <span className={`stat-trend ${trend.direction}`}>
            {trend.direction === 'up' ? '▲' : '▼'} {trend.text}
          </span>
        )}
      </div>
    </Card>
  )
}
