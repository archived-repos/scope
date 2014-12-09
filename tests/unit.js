describe('jstool-scope: Scope', function () {

	var s1, s2, s3;

	beforeEach(function () {
		s1 = new Scope({ foo: 'bar', overlap: 'v1', obj: { value: 'pristine' } });
		s2 = s1.$new({ overlap: 'v2' });

		s3 = s2.$new();
		s3.foo = 'changed';

		s3.obj.value = 'dirty';
	});

	it('test scope level 1', function () {
		expect(s1.foo).toBe('bar');
	});

	it('test scope level 1 overlap', function () {
		expect(s1.overlap).toBe('v1');
	});

	it('test scope level 1 dirty', function () {
		expect(s1.obj.value).toBe('dirty');
	});

	it('test scope level 2 overlap', function () {
		expect(s2.overlap).toBe('v2');
	});

	it('test scope level 3 foo', function () {
		expect(s3.foo).toBe('changed');
	});
});