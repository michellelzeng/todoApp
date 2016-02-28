function equal(array1, array2) {
    return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
}

const stub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;

    let list = [];
    obj[functionName] = (a ,b) => {
        var args = Array.from(arguments);
        for(let item of list) {
            if(equal(item.params, args)) {
                return item.value;
            }
        }
    };

    const result = {
      restore: originalFunction,
      answers: (func) => {
          obj[functionName] = (param) => {
              return func(param);
          }
      },
      calledWith: (a, b) => {
          var args = Array.prototype.slice.call(arguments);
            return {
                    returns: (returnValue) => {
                        list.push({
                            params: args,
                            value: returnValue
                        });
                        return result;
                    }
            }
      }
    };
    return result;
};
export default stub;