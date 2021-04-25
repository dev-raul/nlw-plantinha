import { combineReducers } from 'redux'

import tags from './tags'
import plants from './plants'
import user from './user'
import myplants from './myplants'

export default combineReducers({ user, tags, plants, myplants })