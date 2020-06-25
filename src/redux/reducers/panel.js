import { SET_ACTIVESTEP, SET_COMPLETED } from '../../actionTypes'

const initialState = {
  activeStep: 0,
  completed: new Set(),
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVESTEP:
      return { ...state, activeStep: action.payload }
    case SET_COMPLETED:
      return { ...state, completed: action.payload }
    default:
      return state
  }
}
