// Action para guardar elementos en favoritos - - myList
export const setFavorite = (payload) => (
  {
    type: 'SET_FAVORITE',
    payload
  }
)
// Accion para aliminar elementos de Favoritos - myList
export const deleteFavorite = (payload) => (
  {
    type: 'DELETE_FAVORITE',
    payload
  }
)
