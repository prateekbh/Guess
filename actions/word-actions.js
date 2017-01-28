const SET_SCRABBLED_LETTERS = 'SET_SCRABBLED_LETTERS';
const ADD_LETTER_TO_GUESSED_WORD = 'ADD_LETTER_TO_GUESSED_WORD';
const REMOVE_LETTER_TO_GUESSED_WORD = 'REMOVE_LETTER_TO_GUESSED_WORD';
const FETCH_WORDS_FAILED = 'FETCH_WORDS_FAILED';
const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
const GIVE_HINT = 'GIVE_HINT';
const REMOVE_WRONG_OPTIONS = 'REMOVE_WRONG_OPTIONS';
function fetchNewWords(id){
    return dispatch => {
        fetch('/gamesapi/'+id)
        .then(data => data.json())
        .then(data => {
            dispatch({
                type: FETCH_WORDS_SUCCESS,
                data,
            });
        })
        .catch(err=>{
            dispatch({
                type: FETCH_WORDS_FAILED
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
}