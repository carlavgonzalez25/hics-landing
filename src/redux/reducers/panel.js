import {
  SET_ACTIVESTEP,
  SET_MODELS,
  SET_SELECTED_MODEL,
  NEXT_ACTIVESTEP,
  BACK_ACTIVESTEP,
  SET_CURRENT_MODEL,
} from '../../actionTypes'

const initialState = {
  activeStep: 0,
  models: [],
  selectedModel: 0,
  currentModel: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVESTEP:
      return { ...state, activeStep: action.payload }
    case SET_MODELS:
      return { ...state, models: action.payload }
    case SET_SELECTED_MODEL:
      return { ...state, selectedModel: action.payload }
    case SET_CURRENT_MODEL:
      return { ...state, currentModel: action.payload }
    case NEXT_ACTIVESTEP:
      return { ...state, activeStep: state.activeStep < 3 ? state.activeStep + 1 : 3 }
    case BACK_ACTIVESTEP:
      return { ...state, activeStep: state.activeStep > 0 ? state.activeStep - 1 : 0 }
    default:
      return state
  }
}
