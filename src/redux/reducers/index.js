import { combineReducers } from 'redux'

import auth from './auth'
import form from './form'

const reducers = combineReducers({ auth, form })

export default reducers
