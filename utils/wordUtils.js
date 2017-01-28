const allLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const totalPlatterLength = 12;
function scrabble(word){
    word = word.toUpperCase();
    const wordLength = word.length;
    const wordLetters = word.split('');
    let otherLetters = [];
    for(let remainingCount = (totalPlatterLength - wordLength); remainingCount > 0; remainingCount --){
        const indexToPop = Math.floor(Math.random() * allLetters.length);
        otherLetters.push(allLetters.slice(indexToPop, indexToPop + 1)[0]);
    }
    otherLetters = otherLetters.concat(wordLetters);
    const platterLetters = [];
    for(let index = 0; index < totalPlatterLength; index++){
        const indexToPop = Math.floor(Math.random() * otherLetters.length);
        platterLetters.push(otherLetters.splice(indexToPop, 1)[0]);
    }
    return platterLetters;
}

function getHintLetter(word, guessedLetters, scrabbledLetters) {
    const wordArray = word.toUpperCase().split('');
    const availableScrabbledLetters = [...scrabbledLetters];
    // get all guessed letters in a flat array and then remove them from available options
    guessedLetters.map(data=>data.letter).forEach(letter => {
        const letterIndex = availableScrabbledLetters.indexOf(letter);
        if ( letterIndex !== -1) {
            availableScrabbledLetters[letterIndex] = null;
        }
    });
    let randomIndex;
    while (true && wordArray.length) {
        randomIndex = Math.floor(Math.random() * (wordArray.length - 1));
        const letter = wordArray[randomIndex];
        // check if chosen letter was guessed right by the user
        if (guessedLetters[randomIndex].letter === letter) {
            continue;
        } else {
            return {
                letter,
                index: availableScrabbledLetters.indexOf(letter),
                inWordPosition: randomIndex
            };
        }
        wordArray.splice(randomIndex, 1);
    }

}

export {
    scrabble,
    getHintLetter,
}