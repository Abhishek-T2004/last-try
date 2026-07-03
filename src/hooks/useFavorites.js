import { create } from 'zustand'

export const useFavoritesStore = create((set) => ({
  favorites: [],
  addFavorite: (article) => set((state) => ({
    favorites: [...state.favorites, article]
  })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter(item => item.id !== id)
  })),
}))
