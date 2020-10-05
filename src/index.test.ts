import { uomit } from '.';

it('omits a subset of keys from an object', () => {
	const object = {
		a: 'a',
		b: 'b',
		c: 'c'
	};

	const result = uomit(object, ['b']);

	expect(result).toStrictEqual({
		a: 'a',
		c: 'c'
	});
});
