const fs = require('fs');

function passIsValid(pass) {
	const wordMap = {};

	for(let word of pass.split(' ')) {
		const sortedWord = word.split('').sort().join('');
		if(wordMap.hasOwnProperty(sortedWord)) {
			wordMap[sortedWord]++;
			if(wordMap[sortedWord] > 1) {
				return false;
			}
		}
		else {
			wordMap[sortedWord] = 1;
		}
	}
	
	return true;
}

input = fs.readFileSync('input.txt','utf8').trim();

const numValid = input.split('\n').reduce((sum, cur) => {
	return sum += passIsValid(cur) ? 1 : 0;
},0);

console.log(numValid);

module.exports = {
	passIsValid
};
