export const roundNumb = (num, numToFix, isPos = false) => {
	const changedNum = Number(num).toFixed(numToFix);

	return isPos ? Math.abs(changedNum) : changedNum;
};
