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

export {
    scrabble,
}