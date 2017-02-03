import * as gameActions from '../actions/game-actions';
import * as wordActions from '../actions/word-actions';
import * as userActions from '../actions/user-actions';

const initialState = {
  name: '',
  coins: 100,
  level: 1,
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.SET_USER_DETAILS:
      return Object.assign({}, state, {
        name: action.data.name,
        email: action.data.email,
      });
    case gameActions.WORD_GUESSED:
      return Object.assign({}, state, {coins: state.coins + 10, level: state.level + 1});
    break;
    case wordActions.GIVE_HINT:
      return Object.assign({}, state, {coins: state.coins - 5});
    break;
    case wordActions.REMOVE_WRONG_OPTIONS:
      return Object.assign({}, state, {coins: state.coins - 20});
    break;
    default:
      return state
  }
}