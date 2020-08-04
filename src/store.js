import { createStore } from 'redux'
import updateTotal from './reducers/total'

let store = createStore(updateTotal);

export default store;