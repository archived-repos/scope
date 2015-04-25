describe('jstool-scope: Scope', function () {

	var s1, s2, s3;

	beforeEach(function () {
		s1 = new Scope({ foo: 'bar', overlap: 'v1', obj: { value: 'pristine' } });
		s2 = s1.$$new({ overlap: 'v2' });

		s3 = s2.$$new();
		s3.foo = 'changed';

		s3.obj.value = 'dirty';
	});

	it('tests scope level 1', function () {
		expect(s1.foo).toBe('bar');
	});

	it('tests scope level 1 overlap', function () {
		expect(s1.overlap).toBe('v1');
	});

	it('tests scope level 1 dirty', function () {
		expect(s1.obj.value).toBe('dirty');
	});

	it('tests scope level 2 overlap', function () {
		expect(s2.overlap).toBe('v2');
	});

	it('tests scope level 3 foo', function () {
		expect(s3.foo).toBe('changed');
	});

	it('tests scope evaluator (1)', function () {
		expect( s1.$$eval('foo') ).toBe('bar');
	});

	it('tests scope evaluator (1.1)', function () {
		expect( s1.$$eval('foo + overlap') ).toBe('barv1');
	});

	it('tests scope evaluator (2)', function () {
		expect( s2.$$eval('foo') ).toBe('bar');
	});

	it('tests scope evaluator (2.1)', function () {
		expect( s2.$$eval('foo + overlap') ).toBe('barv2');
	});

	it('tests scope evaluator (3)', function () {
		expect( s3.$$eval('foo') ).toBe('changed');
	});

	it('tests scope evaluator (3.1)', function () {
		expect( s3.$$eval('foo + overlap') ).toBe('changedv2');
	});
});