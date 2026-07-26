import { useState, useMemo } from 'react'
import { X } from 'lucide-react'
import { COLUMN_DEFS } from '../../constants/categoryColumns.js'


const TYPE_OPTIONS = ['Needs', 'Wants', 'Savings']

function TransactionFormModal({ categories, defaultDate, onClose, onSubmit }) {
  const [form, setForm] = useState({
    date: defaultDate,
    category: '',
    subcategory: '',
    amount: '',
    notes: '',
    type: '',
    moneyIn: '',
    moneyOut: '',
  })

  const subcategoryOptions = useMemo(() => {
    if (!form.category) return []
    return (categories[form.category] || []).map((item) => item.name)
  }, [form.category, categories])

  const accountOptions = useMemo(() => {
    const cash = (categories.Cash || []).map((item) => ({ label: `${item.name} (Cash)`, value: item.name }))
    const credit = (categories.Credit || []).map((item) => ({ label: `${item.name} (Credit)`, value: item.name }))
    return [...cash, ...credit]
  }, [categories])

  function update(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'category') next.subcategory = ''
      return next
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Add Transaction</h3>
          <button className="modal-close" onClick={onClose}><X size={18} /></button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => update('date', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              value={form.category}
              onChange={(e) => update('category', e.target.value)}
              required
            >
              <option value="" disabled>Select category...</option>
              {COLUMN_DEFS.map(({ key }) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>

          {form.category && (
            <div className="form-group">
              <label>Subcategory</label>
              {subcategoryOptions.length > 0 ? (
                <select
                  value={form.subcategory}
                  onChange={(e) => update('subcategory', e.target.value)}
                  required
                >
                  <option value="" disabled>Select subcategory...</option>
                  {subcategoryOptions.map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              ) : (
                <p className="form-hint">
                  No {form.category} subcategories yet — add one in the Categories page first.
                </p>
              )}
            </div>
          )}

          <div className="form-group">
            <label>Amount</label>
            <div className="input-wrapper">
              <span className="input-affix">$</span>
              <input
                type="number"
                step="0.01"
                value={form.amount}
                onChange={(e) => update('amount', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Type</label>
            <select value={form.type} onChange={(e) => update('type', e.target.value)}>
              <option value="">None</option>
              {TYPE_OPTIONS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Money In (account receiving funds)</label>
            <select value={form.moneyIn} onChange={(e) => update('moneyIn', e.target.value)}>
              <option value="">N/A</option>
              {accountOptions.map((opt) => (
                <option key={opt.value + '-in'} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Money Out (account paying)</label>
            <select value={form.moneyOut} onChange={(e) => update('moneyOut', e.target.value)}>
              <option value="">N/A</option>
              {accountOptions.map((opt) => (
                <option key={opt.value + '-out'} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <input
              type="text"
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              placeholder="Optional"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Add Transaction</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TransactionFormModal