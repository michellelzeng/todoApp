const MyStub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;
    obj[functionName] = function () {
    };

    return {
      restore: () => {
          obj[functionName] = originalFunction;
      },
      returns: (value) => {
          obj[functionName] = () => {
              return value;
          };
      }
    };
};


export default MyStub;