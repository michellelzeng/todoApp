const stub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;

    const result = {
      restore: originalFunction,
      answers: (func) => {
          obj[functionName] = (param) => {
              return func(param);
          }
      },
      calledWith: (a, b) => {
        return {
            returns: (returnValue) => {
                obj[functionName] = function (a1, b1) {
                    //alert(arguments.length);
                    if(arguments.length > 2) {
                        //alert(arguments.length);
                        return 'explosion';
                    }
                    if(a === a1 && b === b1) {
                        return returnValue;
                    }else {
                        return undefined;
                    }
                };
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