import todos from './todos';
import setFilter from './setfilter';
import error from './error';

import {combineReducers} from 'redux';

export default combineReducers({
  todos, //:todos
  setFilter,  //:setFilter
  error
})