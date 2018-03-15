QUnit.test("QUnit rockzz", function(assert) {
	assert.ok(1 === 1, '1 should be equal to 1');
	assert.notOk(false, 'false if falsey');
	assert.equal(1+1, 2);
	assert.deepEqual([1, 2, 3], [1, 2, 3], 'deepEqual is so cool');
});
