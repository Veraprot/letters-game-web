import {GET_GAMES} from '../actions/types';

const initialState = {
  game: null, 
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        game: action.payload
      };

    default:
      return state;
  }
}
