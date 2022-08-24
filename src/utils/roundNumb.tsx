export const roundNumb = (
	num: number,
	numToFix: number,
	isPos: boolean = false
): number => {
	const changedNum: number = +Number(num).toFixed(numToFix);

	return isPos ? Math.abs(changedNum) : changedNum;
};
