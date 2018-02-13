import * as types from './actionTypes';

const addCard = (section, text) => ({
    type: types.ADD_CARD,
    section,
    text
});

export default { addCard };
