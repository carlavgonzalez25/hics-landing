import { SET_MODEL } from '../../actionTypes'

const initialState = {
  selected: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODEL:
      return { ...state, value: action.payload }
    default:
      return state
  }
}
