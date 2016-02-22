import Mystub from './MyStub';

let obj = {
    sayHello: function () {
        alert("hello");
    }
};

export function testStub() {
    Mystub(obj, 'sayHello');
}


export function testRestore () {
    Mystub(obj, 'sayHello').restore();
    obj.sayHello();
}

export function testReturns () {
    Mystub(obj, 'sayHello').returns('a');
    alert(obj.sayHello());
}



