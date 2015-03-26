it("should require module as object with foo property", function() {
	require("./dep").foo.should.be.eql('foo');
});

