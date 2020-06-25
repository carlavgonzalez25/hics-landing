import { LOGIN, SET_MOTIVE, SET_ACTIVESTEP, SET_COMPLETED } from '../../actionTypes'

//Auth
export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload })
}

//Form
export const setMotive = (payload) => (dispatch) => {
  dispatch({ type: SET_MOTIVE, payload })
}

//Panel
export const setActiveStep = (payload) => (dispatch) => {
  dispatch({ type: SET_ACTIVESTEP, payload })
}

export const setCompleted = (payload) => (dispatch) => {
  dispatch({ type: SET_COMPLETED, payload })
}
