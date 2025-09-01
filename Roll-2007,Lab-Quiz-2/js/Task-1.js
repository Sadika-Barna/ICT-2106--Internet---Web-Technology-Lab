function countVowels(sentence) {
    
    const lowerCaseSentence = sentence.toLowerCase();
    
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    
    let count = 0;
    
    
    for (let char of lowerCaseSentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


const sentence = "Hello how are you?";
const vowelCount = countVowels(sentence);

console.log("Number of vowels:", vowelCount);
