function equal(array1, array2) {
    return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
}

const MyStub = (obj, functionName)  => {
    const originalFunction = obj[functionName] ;
    let list = [];
    obj[functionName] = (a ,b) => {
        var args = Array.from(arguments);
        for(let item of list) {
            if(equal(item.args, args)) {
                return item.value;
            }
        }
    };

    const stub = {
      restore: () => {
          obj[functionName] = originalFunction;
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


export default MyStub;