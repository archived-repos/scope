describe('jEngine Scope', function () {

	var s1, s2, s3;

	beforeEach(function () {
		s1 = new Scope({ foo: 'bar', overlap: 'v1', obj: { value: 'pristine' }, num: 2 });
		s2 = s1.$$new({ overlap: 'v2' });

		s3 = s2.$$new({ num: s1.num*2 });
		s3.foo = 'changed';

		s3.obj.value = 'dirty';
	});

	describe('testing values', function () {

		it('level 1', function () {
			expect(s1.foo).toBe('bar');
		});

		it('level 1 overlap', function () {
			expect(s1.overlap).toBe('v1');
		});

		it('level 1 dirty', function () {
			expect(s1.obj.value).toBe('dirty');
		});

		it('level 2 overlap', function () {
			expect(s2.overlap).toBe('v2');
		});

		it('level 3 foo', function () {
			expect(s3.foo).toBe('changed');
		});

		it('num', function () {
			expect(s1.num + s3.num).toBe(6);
		});

	});

	describe('evaluator', function () {

		it('evaluator (1)', function () {
			expect( s1.$$eval('foo') ).toBe('bar');
		});

		it('evaluator (1.1)', function () {
			expect( s1.$$eval('foo + overlap') ).toBe('barv1');
		});

		it('evaluator (2)', function () {
			expect( s2.$$eval('foo') ).toBe('bar');
		});

		it('evaluator (2.1)', function () {
			expect( s2.$$eval('foo + overlap') ).toBe('barv2');
		});

		it('evaluator (3)', function () {
			expect( s3.$$eval('foo') ).toBe('changed');
		});

		it('evaluator (3.1)', function () {
			expect( s3.$$eval('foo + overlap') ).toBe('changedv2');
		});

	});

});
