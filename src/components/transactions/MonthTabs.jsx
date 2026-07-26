

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function MonthTabs({ year, activeMonth, onSelect }) {
  return (
    <div className="month-tabs">
      {MONTHS.map((label, index) => {
        const key = `${year}-${String(index + 1).padStart(2, '0')}`
        return (
          <button
            key={key}
            className={`month-tab ${activeMonth === key ? 'active' : ''}`}
            onClick={() => onSelect(key)}
          >
            {label.slice(0, 3)}
          </button>
        )
      })}
    </div>
  )
}

export default MonthTabs
export { MONTHS }