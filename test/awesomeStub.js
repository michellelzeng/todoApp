function equal(array1, array2) {
    return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
}

const awesomeStub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;
    let list = [];
    let answerFunc;
    obj[functionName] = function () {
        var args = Array.from(arguments);
        for(let item of list) {
            if(equal(item.args, args)) {
                return item.value;
            }
        }
        //if answers exists, then return answerFunction.
        if(answerFunc) {
            return answerFunc.apply(null, arguments);
        }
    };

    const stub = {
      restore: () => {
          obj[functionName] = originalFunction;
          return stub;
      },
      answers: (fn) => {
        answerFunc = fn;
        return stub;
      },
      returns: (value) => {
          if(list.length == 0) {
              obj[functionName] = () => {
                  return value;
              };
          }else {
              //get the last item from the list, and set the item's value to the passed value
              list[list.length - 1].value = value;
          }
          return stub;
      },
      calledWith()  {
          const a = Array.prototype.slice.call(arguments);
          list.push({args: a});
          return stub;
      }
    };
    return stub;
};

export const awesomeMock = (obj) => {

    let mockObject = {};
    let list = []; // contains a list of {functionName: fu, cases: [ {input: params, output: value}]}
    let functionName;

    const setFunction = () => {
        for(let item of list) {
            obj[item.functionName] = () => {
                return item.value;
            }
        }
    } ;
    let functions = Object.getOwnPropertyNames(obj);

    for(let i in functions) {
        mockObject[functions[i]] = () => {
            functionName = functions[i];
            return {
                returns: (value) => {
                    list.push( {functionName, value}); //check if the function exists, yes: then add
                    setFunction();
                    return mockObject;
                }
            }
        }
    }


    return mockObject;

};

export default awesomeStub;