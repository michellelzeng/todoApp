import stub from './MyStubReturns.js';

let obj = {
    sayHello: function () {
        alert("hello");
    }
};


export default function testReturns () {
    stub(obj, 'sayHello').returns('a');
    alert(obj.sayHello());
}



