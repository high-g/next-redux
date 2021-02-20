import { countReducer } from '@/duck/myButton/countReducer'
import { createStore } from 'redux'

export const store = createStore(countReducer)
