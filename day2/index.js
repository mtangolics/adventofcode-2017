const fs = require('fs');

function checksum1(input) 
{
	return input.split('\n').reduce((sum, cur) => {
		return sum += diffRow(cur);
	},0);
}

function checksum2(input) 
{
	return input.split('\n').reduce((sum, cur) => {
		return sum += divRow(cur);
	},0);
}

function diffRow(row) {
	const rowVals = row.split(/\s+/g).map(s => parseInt(s));
	let min = rowVals[0];
	let max = 0;

	rowVals.forEach(num => {
		if(num < min) {
			min = num;
		}
		if(num > max) {
			max = num;
		}
	});

	return max - min;
}

function divRow(row) {
	const rowVals = row.split(/\s+/g).map(s => parseInt(s));
	
	for(let i = 0; i < rowVals.length; i++) {
		for(let j = 0; j < rowVals.length; j++) {
			if(i !== j && areDivisible(rowVals[i],rowVals[j])) {
				return rowVals[i] > rowVals[j] ? rowVals[i] / rowVals[j] : rowVals[j] / rowVals[i];
			} 
		}
	}
}

function areDivisible(num1, num2) {
	return num1 > num2 ? num1 % num2 === 0 : num2 % num1 === 0;
}

module.exports = {
	checksum1,
	checksum2,
	diffRow,
	divRow
};
