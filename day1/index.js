
function captcha(num) {
	return num.toString().split('').map(n => parseInt(n)).reduce((sum,cur,idx,arr) => {
		return cur === arr[(idx+1) % arr.length] ? sum + cur : sum;
	},0);
}

function captchaPart2(num) {
	return num.toString().split('').map(n => parseInt(n)).reduce((sum,cur,idx,arr) => {
		return cur === arr[(idx + arr.length/2) % arr.length] ? sum + cur : sum;
	},0);
}

module.exports = {
	captcha,
	captchaPart2
};
