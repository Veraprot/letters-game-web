import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
// import errorReducer from './errorReducer';
// import conversationReducer from './conversationReducer';
// import itemReducer from './itemReducer';

export default combineReducers({
  game: gameReducer, 
})
