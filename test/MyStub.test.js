import Mystub from './MyStub';

let obj = {
    hello: function () {
        return("hello");
    }
};

export default function test() {
    let stub = Mystub(obj, 'hello');
    alert(obj.hello());
    stub.restore();
    alert(obj.hello());
    stub.returns('a');
    alert(obj.hello());

}



