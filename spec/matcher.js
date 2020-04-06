var ObjectMatchers = {
    toBeInstanceOf: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var result = {
                    pass: null,
                    message: '',
                };
                if (typeof actual != 'object') {
                    result.pass = false;
                    result.message = `Actual variable must be an object, but got ${typeof actual}`;
                }
                if (typeof expected != 'function') {
                    result.pass = false;
                    result.message = `Expectation must be a class (function), but got ${typeof expected}`;
                }
                if (null === result.pass) {
                    result.pass = actual instanceof expected;
                    if (!result.pass) {
                        result.message = `Object instance does not match the expected class.`;
                    }
                }
                return result;
            }
        };
    }
};
