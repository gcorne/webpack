(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof exports === 'object') {
		// Node js environment
		exports.foo = factory();
	} else {
		// Browser globals (this is window)
		this.foo = factory();
	}
}(function () {
	return 'foo';
}));
