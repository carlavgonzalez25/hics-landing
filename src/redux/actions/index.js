import { LOGIN, SET_MOTIVE } from '../../actionTypes'

//Auth
export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload })
}


//Form
export const setMotive = (value) =>  {
 console.log("Accedi aca y value es" + value);
 return dispatch => { dispatch({type: SET_MOTIVE, payload: value})}
}
