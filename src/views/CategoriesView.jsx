import CategoryColumn from '../components/categories/CategoryColumn.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { SEED_CATEGORIES } from '../constants/seedData.js'

import { COLUMN_DEFS, CATEGORIES_STORAGE_KEY } from '../constants/categoryColumns.js'

function CategoriesView() {
  const [categories, setCategories] = useLocalStorage(
    CATEGORIES_STORAGE_KEY,
    SEED_CATEGORIES
  )
  function handleAdd(column, item) {
    setCategories((prev) => ({
      ...prev,
      [column]: [...prev[column], item],
    }))
  }

  function handleRemove(column, index) {
    setCategories((prev) => ({
      ...prev,
      [column]: prev[column].filter((_, i) => i !== index),
    }))
  }

  return (
    <div>
      <h1 id="component-view-title">Categories</h1>
      <div className="categories-grid">
        {COLUMN_DEFS.map(({ key, description }) => (
          <CategoryColumn
            key={key}
            title={key}
            description={description}
            items={categories[key]}
            onAdd={(item) => handleAdd(key, item)}
            onRemove={(index) => handleRemove(key, index)}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoriesView