export const uomit = <T, S extends keyof T>(obj: T, keys: Array<S>): Omit<T, S> => {
	const newObj: any = {};
	Object.assign(newObj, obj);

	keys.forEach(key => {
		delete newObj[key];
	});

	return newObj;
};

export default uomit;
