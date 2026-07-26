import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import TransactionFormModal from './TransactionFormModal.jsx'


function TransactionsTable({ transactions, categories, defaultDate, onAdd, onRemove }) {
  const [showModal, setShowModal] = useState(false)

  function handleSubmit(data) {
    onAdd(data)
    setShowModal(false)
  }

  return (
    <div className="transactions-table-wrapper">
      <div className="transactions-toolbar">
        <button className="add-btn" onClick={() => setShowModal(true)}>
          <Plus size={14} />
          <span>Add Transaction</span>
        </button>
      </div>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Money In</th>
            <th>Money Out</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan={9} className="empty-row">No transactions yet this month.</td>
            </tr>
          ) : (
            transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.date}</td>
                <td>{tx.category}</td>
                <td>{tx.subcategory}</td>
                <td>${Number(tx.amount).toFixed(2)}</td>
                <td>{tx.type || '—'}</td>
                <td>{tx.moneyIn || '—'}</td>
                <td>{tx.moneyOut || '—'}</td>
                <td>{tx.notes || '—'}</td>
                <td>
                  <button className="transactions-remove-btn" onClick={() => onRemove(index)} aria-label="Remove transaction">
                    <X size={14} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showModal && (
        <TransactionFormModal
          categories={categories}
          defaultDate={defaultDate}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default TransactionsTable