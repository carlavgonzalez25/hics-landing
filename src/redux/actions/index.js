import { LOGIN, SET_MOTIVE } from '../../actionTypes'

//Auth
export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload })
}

//Form
export const setMotive = (payload) => (dispatch) => {
  dispatch({ type: SET_MOTIVE, payload })
}
