function equal(array1, array2) {
    return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
}

const awesomeStub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;
    let list = [];
    let answerFunc;
    obj[functionName] = () => {
        var args = Array.from(arguments);
        for(let item of list) {
            if(equal(item.args, args)) {
                return item.value;
            }
        }
        //if answers exists, then return answerFunction.
        if(answerFunc) {
            return answerFunc(arguments);
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
      calledWith: () => {
          var args = Array.prototype.slice.call(arguments);
          list.push({args: args});
          return stub;
      }
    };
    return stub;
};

export const awesomeMock = (obj) => {

    let mockObject = {};
    let list = [];
    let functionName;

    const setFunction = () => {
        for(let item of list) {
            obj[item.functionName] = () => {
                return item.value;
            }
        }
    } ;

    // a list that remembers the function name and the return value.
    // when returns called, I'll save the value and the previous function name there.

    // loop through each item in the list, set the return value for each function

    let functions = Object.getOwnPropertyNames(obj);

    for(let i in functions) {
        mockObject[functions[i]] = () => {
            functionName = functions[i];
            return {
                returns: (value) => {
                    list.push( {functionName, value});
                    setFunction();
                    return mockObject;
                }
            }
        }
    }


    return mockObject;

};

//let mock = awesomeMock(obj);
//
//mock.foo().returns(3);
//mock.test().return(4);
//
//
//
//alert(obj.foo());
//alert(obj.test());
//
//mock.foo(1, 2).returns(3);

export default awesomeStub;