export const compareParams = (prop) => {
	return (a,b) => a[prop] - b[prop];
};

export default compareParams;