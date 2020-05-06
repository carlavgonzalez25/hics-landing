import { SET_MOTIVE } from '../../actionTypes'

const initialState = {
  value: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOTIVE:
      return { ...state, value: action.payload }
    default:
      return state
  }
}
