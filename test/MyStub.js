const Mystub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;
    let temp;
    obj[functionName] = function () {
        return temp;
    };

    return {
      restore: () => {
          obj[functionName] = originalFunction;
      },
      returns: (returnValue) => {
          temp = returnValue;
      }
    };
};

Mystub();


//stub(obj, functionName).restore()
//Replaces the function on the object, then restores it to its original


//stub(obj, functionName).returns('a')
//Returns 'a' when called

export default Mystub;