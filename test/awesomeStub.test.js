import awesomeStub from './awesomeStub';

let obj = {
    hello: function () {
        return("hello");
    }
};

export default function test() {
    let stub = awesomeStub(obj, 'hello');
    //alert(obj.hello());

    //stub.restore();
    //alert(obj.hello());
    //
    //stub.returns('a');
    //alert(obj.hello());

    //stub.calledWith(1, 2).returns(3).calledWith(1, 2, 3).returns('explosion');
    stub.answers( a => 'Hello' + a);

    //stub.calledWith(1, 2, 3).returns('explosion').answers( a => 'Hello' + a);


    alert(obj.hello(1, 2, 3));
    alert(obj.hello('Michelle'));
}



