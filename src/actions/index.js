// Action para guardar elementos en favoritos - - myList
export const setFavorite = (payload) => (
  {
    type: 'SET_FAVORITE',
    payload
  }
)
// Accion para eliminar elementos de Favoritos - myList
export const deleteFavorite = (payload) => (
  {
    type: 'DELETE_FAVORITE',
    payload
  }
)
// Accion para guardat en el sotore datos del login
export const loginRequest = (payload) => (
  {
    type: 'LOGIN_REQUEST',
    payload
  }
)

export const logoutRequest = (payload) => (
  {
    type: 'LOGOUT_REQUEST',
    payload
  }
)
