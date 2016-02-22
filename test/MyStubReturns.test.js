import stub from './MyStubReturns.js';

let obj = {
    sayHello: function () {
        alert("hello");
    }
};


export default function testReturns () {
    //stub(obj, 'sayHello').calledWith(1,2).returns(3);
    stub(obj, 'sayHello').calledWith(1,2).returns(3).calledWith(1,2,3).returns('explosion');
    alert(obj.sayHello(1, 2));
    alert(obj.sayHello(1, 3));
    alert(obj.sayHello(1, 2, 3));


    //stub(obj, 'sayHello').answers(a => 'Hello' + a) ;
    //
    //alert(obj.sayHello('Michelle'));
}



