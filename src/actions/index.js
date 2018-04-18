import countries from '../mock-data';
import { COUNTRY_SUGGESTION, CLEAR_SUGGESTION } from './types';

export const addSuggestion = chosenCountry => {
    const matched = countries.filter(country => {
        return (
            country.name
                .replace(/[^\w]/g, '')
                .toLowerCase()
                .indexOf(chosenCountry) === 0
        );
    });

    return {
        type: COUNTRY_SUGGESTION,
        payload: matched
    };
};

export const removeSuggestion = () => {
    return {
        type: CLEAR_SUGGESTION
    };
};

export const clearCountry = () => {
    return {
        type: CLEAR_SUGGESTION
    };
};
