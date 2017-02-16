import {ROUTE_CHANGE} from '../actions/route-actions';

const initialState = {
  currentRoute: null,
}
export default function routeReducer(state = initialState, action) {
    switch (action.type) {
        case ROUTE_CHANGE:
            return Object.assign({},state,{currentRoute: action.route})
        break;
            default:
        return state
    }
}