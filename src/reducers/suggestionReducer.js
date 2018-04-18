import { COUNTRY_SUGGESTION, CLEAR_SUGGESTION } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case COUNTRY_SUGGESTION:
            return action.payload;

        case CLEAR_SUGGESTION:
            return null;

        default:
            return state;
    }
}
