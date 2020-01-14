import { MESSAGES_LOADED } from '../action-creators/action-types.js';

export default (state = [], action) => (action.type === MESSAGES_LOADED ? action.payload : state);
