import { combineReducers } from 'redux'

import auth from './auth'
import form from './form'
import panel from './panel'

const reducers = combineReducers({ auth, form, panel })

export default reducers
