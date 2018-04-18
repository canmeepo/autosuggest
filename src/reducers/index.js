import { combineReducers } from 'redux';
import SuggestionReducer from './suggestionReducer';

const rootReducer = combineReducers({
    suggestions: SuggestionReducer,
});

export default rootReducer;
