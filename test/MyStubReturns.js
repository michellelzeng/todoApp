const stub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;

    obj[functionName] = function () {
    };

    return {
      restore: originalFunction,
      returns: (returnValue) => {
          obj[functionName] = function () {
              return returnValue;
          }
      }
    };
};


//stub(obj, functionName).restore()
//Replaces the function on the object, then restores it to its original


//stub(obj, functionName).returns('a')
//Returns 'a' when called

export default stub;