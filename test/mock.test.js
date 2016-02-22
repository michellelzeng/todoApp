import mock from './mock.js'

export default function testMock () {
    let obj = {
        foo: () => {
            return 1;
        }
    };

    mock(obj).foo(1, 2).returns(3);

    alert(obj.foo(1, 2));
    alert(obj.foo(1, 3));
}