function equal(array1, array2) {

    return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
}

const stub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;

    let calledWithParams ;
    let value;
    let list;
    obj[functionName] = (a ,b) => {
        // 1. loop through each item in the list
        // 2. check if the item matches the arguments
        // 3. if yes, return the corresponding value


    };

    const result = {
      restore: originalFunction,
      answers: (func) => {
          obj[functionName] = (param) => {
              return func(param);
          }
      },
      calledWith: (a, b) => {
          calledWithParams = Array.prototype.slice.call(arguments);
            return {
                    returns: (returnValue) => {
                        value = returnValue;
                        list.push({
                            params: arguments,
                            value: returnValue
                        });
                        return result;
                    }
            }
      }
    };
    return result;
};


//stub(obj, functionName).restore()
//Replaces the function on the object, then restores it to its original


//stub(obj, functionName).returns('a')
//Returns 'a' when called

export default stub;