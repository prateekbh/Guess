const SET_SCRABBLED_LETTERS = 'SET_SCRABBLED_LETTERS';
const ADD_LETTER_TO_GUESSED_WORD = 'ADD_LETTER_TO_GUESSED_WORD';
const REMOVE_LETTER_TO_GUESSED_WORD = 'REMOVE_LETTER_TO_GUESSED_WORD';
const FETCH_WORDS_FAILED = 'FETCH_WORDS_FAILED';
const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
const GIVE_HINT = 'GIVE_HINT';
const REMOVE_WRONG_OPTIONS = 'REMOVE_WRONG_OPTIONS';
const NOTIFICATION_HINT = 'NOTIFICATION_HINT';
import {fireImageFetchRequest} from '../utils/wordUtils';

function fetchNewWords(id){
    return dispatch => {
        fetch('/gamesapi/randomwords',{
            credentials: 'include',
        })
        .then(data => data.json())
        .then(async (data) => {
            let newImages = [];
            data.words.forEach(word => {
                newImages = newImages.concat(word.images);
            });
            fireImageFetchRequest(newImages);
            dispatch({
                type: FETCH_WORDS_SUCCESS,
                data,
            });
        })
        .catch(error=>{
            dispatch({
                type: FETCH_WORDS_FAILED,
                error,
            });
        })
    }
}

export {
    SET_SCRABBLED_LETTERS,
    ADD_LETTER_TO_GUESSED_WORD,
    REMOVE_LETTER_TO_GUESSED_WORD,
    fetchNewWords,
    FETCH_WORDS_FAILED,
    FETCH_WORDS_SUCCESS,
    GIVE_HINT,
    REMOVE_WRONG_OPTIONS,
    NOTIFICATION_HINT,
}