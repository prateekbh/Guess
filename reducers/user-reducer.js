import * as gameActions from '../actions/game-actions';

const initialState = {
  name: '',
  coins: 100,
  level: 1,
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case gameActions.WORD_GUESSED:
      return Object.assign({}, state, {coins: state.coins + 10, level: state.level + 1});
    break;
    default:
      return state
  }
}