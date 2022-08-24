export const roundNumb = (
	num: number,
	numToFix: number,
	isPos = false
): number => {
	const changedNum: number = +Number(num).toFixed(numToFix);

	return isPos ? Math.abs(changedNum) : changedNum;
};
