import { LOGIN } from '../../actionTypes'

//Auth
export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload })
}
