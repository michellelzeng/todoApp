var exports = module.exports = {};

const tests = [];
exports.it = function(desc, fn){
    tests.push({
        desc: desc,
        fn: fn
    });
};

exports.run = function() {
    // load all the test files
    // run the it methods one by one
    // save the result: results[]: desc, passing, stack.
    // generate the test summary
    // result[]: desc, passing, stack.
    require('./test.js');
    var results = tests.map(function(test) {        
        try{
            test.fn();
            return {
                desc: test.desc,
                passing: true
            }
        } catch (e) {
            return {
                desc: test.desc,
                passing: false,
                stack: e.stack
            }
        }
    });
    print(results);
}

function print(results) {
    let failingTests = 0;
    let passingTests = 0
    results.forEach(function (result) {
        if(result.passing) {
            passingTests ++;
            console.log('\u2713 ' + result.desc)
        } else {
            failingTests ++;
            console.log(result.desc)
        }
    })
    console.log('\n');
    console.log (passingTests + ' tests passing');
    console.log (failingTests + ' tests failing');

}

