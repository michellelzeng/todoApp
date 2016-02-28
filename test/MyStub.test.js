import MyStub from './MyStub';

let obj = {
    hello: function () {
        return("hello");
    }
};

export default function test() {
    let stub = MyStub(obj, 'hello');
    alert(obj.hello());

    //stub.restore();
    //alert(obj.hello());
    //
    //stub.returns('a');
    //alert(obj.hello());

    stub.calledWith(1, 2).returns(3).calledWith(1, 2, 3).returns('explosion');

    alert(obj.hello());
}



