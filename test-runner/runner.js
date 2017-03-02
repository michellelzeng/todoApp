const tests = [];
const result = [];
const run = () => {
    require('./test1.js');
    tests.reduce((accum, test) => {
       return accum.then(() => {
            console.log('then');
            test.fn();
            result.push({
                desc: test.desc,
                passed: true
            })
       }).catch((e) => {
            result.push({
                desc: test.desc,
                passed: false,
                stack: e.stack
            })
       });
    }, Promise.resolve())
    .then(() => {
        console.log(result)
    });
};

const it = (desc, fn) => {
    tests.push({desc, fn});
};

const test = () => {
    const sequence = Promise.resolve();
    sequence.then(() => {
        console.log('promise resolve');
    });

    tests.reduce((test, accum) => {
       return accum.then(() => {
            test.fn();
            result.push({
                desc: test.desc,
                passed: true
            })
       }).catch((e) => {
            result.push({
                desc: test.desc,
                passed: false,
                stack: e.stack
            })
       });
    }, Promise.resolve());

}

module.exports = {
    run,
    it,
    test
};


