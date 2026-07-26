import { useState } from 'react'
import { Plus, X, Info } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Modal from '../ui/Modal.jsx'
import { CATEGORY_FIELDS } from './categoryFields.js'


function summarize(title, item) {
  switch (title) {
    case 'Cash': return `$${item.balance}`
    case 'Credit': return `$${item.balance} owed · limit $${item.limit}`
    case 'Savings': return `Goal: $${item.goalAmount} by ${item.targetDate}`
    case 'Income': return `$${item.amount} on ${item.payDate}`
    case 'Expenses': return `$${item.budget}/mo · ${item.paymentMethod}`
    case 'Bills': return `$${item.amount} due ${item.dueDate} · ${item.paymentMethod}`
    case 'Investments': return `${item.type} · $${item.amount}`
    case 'Debts': return `$${item.balance} owed · ${item.interestRate}% · due ${item.dueDate}`
    default: return ''
  }
}

function CategoryColumn({ title, description, items, onAdd, onRemove }) {
  const [showModal, setShowModal] = useState(false)
  const fields = CATEGORY_FIELDS[title] || []

  function handleSubmit(data) {
    onAdd(data)
    setShowModal(false)
  }

  return (
    <Card>
      <div className="category-header">
        <h3 className="category-title">{title}</h3>
        {description && (
          <span className="info-icon" tabIndex={0}>
            <Info size={14} />
            <span className="tooltip">{description}</span>
          </span>
        )}
      </div>

      <ul className="category-list">
        {items.map((item, index) => (
          <li key={index} className="category-item">
            <div className="category-item-info">
              <span className="category-item-name">{item.name}</span>
              <span className="category-item-detail">{summarize(title, item)}</span>
            </div>
            <button
              className="remove-btn"
              onClick={() => onRemove(index)}
              aria-label={`Remove ${item.name}`}
            >
              <X size={14} />
            </button>
          </li>
        ))}
      </ul>

      <button className="add-btn" onClick={() => setShowModal(true)}>
        <Plus size={14} />
        <span>Add</span>
      </button>

      {showModal && (
        <Modal
          title={`Add ${title} Category`}
          fields={fields}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </Card>
  )
}

export default CategoryColumn