import awesomeStub, {awesomeMock} from './awesomeStub';

let obj = {
    hello: function () {
        return("hello");
    },
    foo: function () {
      return ('foo');
    }
};

export default function testStub() {
    let stub = awesomeStub(obj, 'hello');
    //alert(obj.hello());

    //stub.restore();
    //alert(obj.hello());
    //
    //stub.returns('a');
    //alert(obj.hello());

    //stub.calledWith(1, 2).returns(3).calledWith(1, 2, 3).returns('explosion');
    //stub.answers( a => 'Hello' + a);

    stub.calledWith(1, 2, 3).returns('explosion').answers( a => 'Hello' + a);


    //alert(obj.hello(1, 2));
    alert(obj.hello(1, 2, 3));
    alert(obj.hello(' Michelle'));
}

export function testMock() {
    let mock = awesomeMock(obj);

    mock.foo().returns(3);
    alert(obj.foo());

    mock.hello().returns(4);
    alert(obj.hello());

    // I want the mock is able to remember a list of parameters and return values.
    mock.foo(1, 2).returns(3);
}



