import { MESSAGES_LOADED } from '../action-creators/action-types.js';
import comparator from '../utils/comparator';

const compareByTimestamp = comparator('timestamp');

export default (state = [], action) => (
  action.type === MESSAGES_LOADED
    ? action.payload.sort(compareByTimestamp)
    : state
);
