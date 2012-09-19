describe('Calculator', function() {
	var calculator;
	beforeEach(function() {
		calculator=new Calculator();
	});

	it('should sum 1+2', function() {
		var result=calculator.sum(1,2);
		result.should.equal(3);
	});
});