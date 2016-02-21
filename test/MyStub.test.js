import stub from './MyStub';

let obj = {
    sayHello: function () {
        alert("hello");
    }
};

export function testStub() {
    stub(obj, 'sayHello');
}


export function testRestore () {
    stub(obj, 'sayHello').restore();
    obj.sayHello();
}

export function testReturns () {
    stub(obj, 'sayHello').returns('a');
    alert(obj.sayHello());
}



