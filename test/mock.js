const mock = (obj) => {
    //
    let mockObject = {};
    let functions = Object.getOwnPropertyNames(obj);

    for(let i in functions) {
        mockObject[functions[i]] = (a, b) => {
            return {
                returns: (returnValue) => {
                    obj[functions[i]] = (a1, b1) => {
                        if(a1 === a && b1 === b) {
                            return returnValue;
                        }else{
                            return undefined;
                        }
                    }
                }
            }
        }
    }
    return mockObject;
};

export default mock;