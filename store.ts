import { countReaducer } from './duck/myButton/countReaducer'
import { createStore } from 'redux'

export const store = createStore(countReaducer)
