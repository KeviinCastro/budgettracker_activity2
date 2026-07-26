import { create } from 'zustand'

export const useCategoriesStore = create((set, get) => ({
  categories: [],

  // getters (just derive in components, or expose as functions)
  expenseCategories: () => get().categories.filter(c => c.type === 'expense'),
  incomeCategories: () => get().categories.filter(c => c.type === 'income'),
  debtCategories: () => get().categories.filter(c => c.type === 'debt'),

  // actions
  addCategory: (category) => set((state) => ({
    categories: [
      ...state.categories,
      { id: crypto.randomUUID(), ...category }
    ]
  })),

  removeCategory: (id) => set((state) => ({
    categories: state.categories.filter(c => c.id !== id)
  })),

  updateCategory: (id, updates) => set((state) => ({
    categories: state.categories.map(c =>
      c.id === id ? { ...c, ...updates } : c
    )
  }))
}))