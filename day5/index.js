const fs = require('fs');

function executeSteps(steps) {
	let numSteps = 0;
	let stepArray = steps.split('\n').map(s => parseInt(s,10));
	let pointer = 0;

	while(pointer < stepArray.length) {
		const prevPointer = pointer;

		pointer += stepArray[pointer];
		stepArray[prevPointer]++;
		numSteps++;
	}

	return numSteps;
}

function executeStepsPart2(steps) {
	let numSteps = 0;
	let stepArray = steps.split('\n').map(s => parseInt(s,10));
	let pointer = 0;

	while(pointer < stepArray.length) {
		const prevPointer = pointer;

		pointer += stepArray[pointer];
		if(stepArray[prevPointer] >= 3) {
			stepArray[prevPointer]--;
		}
		else {
			stepArray[prevPointer]++;
		}
		numSteps++;
	}

	return numSteps;
}

input = fs.readFileSync('input.txt','utf8').trim();

console.log(executeStepsPart2(input));

module.exports = {
	executeSteps,
	executeStepsPart2
};
