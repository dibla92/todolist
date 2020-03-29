import todos from './todos';
import setFilter from './setfilter';
import error from './error';
import lists from './lists';

import {combineReducers} from 'redux';

export default combineReducers({
  lists,
  todos, //:todos
  setFilter,  //:setFilter
  error
})