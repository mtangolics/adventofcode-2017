function getSteps(num) {
	const n = Math.ceil(Math.sqrt(num));
	const max = Math.pow(n,2);

	let matrix = new Array(n);
	for(let i = 0; i < n; i++) {
		matrix[i] = new Array(n).fill(0);
	}

	let originCol = Math.floor(n/2);
	let originRow = originCol;

	matrix[originRow][originCol] = 1;

	let curNum = 1;
	let rowMin = originRow - 1;
	let rowMax = originRow + 1;
	let colMin = originCol - 1;
	let colMax = originCol + 1;
	let rowDir = -1;
	let colDir = 0;
	let curRow = originRow;
	let curCol = originCol + 1;

	while(curNum < num) {

		curNum++;
		matrix[curRow][curCol] = curNum;
		
		// bottom left
		if(curCol === colMin && curRow === rowMax) {
			rowDir = 0;
			colDir = 1;
		}
		// top right
		if(curCol === colMax && curRow === rowMin) {
			rowDir = 0;
			colDir = -1;
		}
		// top left
		if(curRow === rowMin && curCol === colMin) {
			colDir = 0;
			rowDir = 1;
		}
		// bottom right
		if(curRow === rowMax && curCol === colMax) {
			colDir = 0;
			rowDir = -1;
			curCol++;

			curNum++;
			matrix[curRow][curCol] = curNum;
			
			rowMin--;
			rowMax++;
			colMin--;
			colMax++;
		}

		//printMatrix(matrix);
		
		curCol += 1*colDir;
		curRow += 1*rowDir;
	}

	return calcDistance(originRow, originCol, curRow, curCol);
}

function getSteps2(num) {
	const n = Math.ceil(Math.sqrt(num));
	const max = Math.pow(n,2);

	let matrix = new Array(n);
	for(let i = 0; i < n; i++) {
		matrix[i] = new Array(n).fill(0);
	}

	let originCol = Math.floor(n/2);
	let originRow = originCol;

	matrix[originRow][originCol] = 1;

	let curNum = 1;
	let rowMin = originRow - 1;
	let rowMax = originRow + 1;
	let colMin = originCol - 1;
	let colMax = originCol + 1;
	let rowDir = -1;
	let colDir = 0;
	let curRow = originRow;
	let curCol = originCol + 1;

	while(curNum < num) {
		curNum = sumAdjacent(matrix,curRow,curCol);
		matrix[curRow][curCol] = curNum;
		
		// bottom left
		if(curCol === colMin && curRow === rowMax) {
			rowDir = 0;
			colDir = 1;
		}
		// top right
		if(curCol === colMax && curRow === rowMin) {
			rowDir = 0;
			colDir = -1;
		}
		// top left
		if(curRow === rowMin && curCol === colMin) {
			colDir = 0;
			rowDir = 1;
		}
		// bottom right
		if(curRow === rowMax && curCol === colMax) {
			colDir = 0;
			rowDir = -1;
			curCol++;

			curNum = sumAdjacent(matrix,curRow,curCol);
			matrix[curRow][curCol] = curNum;
			
			rowMin--;
			rowMax++;
			colMin--;
			colMax++;
		}
		curCol += 1*colDir;
		curRow += 1*rowDir;
	}

	return curNum;
}

function sumAdjacent(mat, row, col) {
	return safeAccess(mat,row-1,col-1) + safeAccess(mat,row-1,col) 
		+ safeAccess(mat,row-1,col+1) + safeAccess(mat,row,col+1)
		+ safeAccess(mat,row+1,col+1) + safeAccess(mat,row+1,col)
		+ safeAccess(mat,row+1,col-1) + safeAccess(mat,row,col-1);
}

function safeAccess(mat, row, col) {
	if(row >= mat.length || col >= mat[row].length) {
		return 0;
	}
	else {
		return mat[row][col];
	}
}

function printMatrix(mat) {
    for(let i = 0; i < mat.length; i++) {
		console.log(mat[i].join(' '));
	}
}

function calcDistance(r1, c1, r2, c2) {
	return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}


console.log(getSteps(25));

module.exports = {
	getSteps
};