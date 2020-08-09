import {
  LOGIN,
  SET_MOTIVE,
  SET_ACTIVESTEP,
  SET_MODELS,
  SET_SELECTED_MODEL,
  SET_CURRENT_MODEL,
  NEXT_ACTIVESTEP,
  BACK_ACTIVESTEP,
} from '../../actionTypes'

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

export const nextActiveStep = (payload) => (dispatch) => {
  dispatch({ type: NEXT_ACTIVESTEP, payload })
}

export const backActiveStep = (payload) => (dispatch) => {
  dispatch({ type: BACK_ACTIVESTEP, payload })
}

export const setModels = (payload) => (dispatch) => {
  dispatch({ type: SET_MODELS, payload })
}

export const setSelectedModel = (payload) => (dispatch) => {
  dispatch({ type: SET_SELECTED_MODEL, payload })
}

export const setCurrentModel = (payload) => (dispatch) => {
  dispatch({ type: SET_CURRENT_MODEL, payload })
}
