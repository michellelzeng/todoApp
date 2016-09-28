import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from './actionCreator';
import Rx from 'rxjs/Rx';

export class Counter extends Component {
    render() {
        return (
            <div>
                <input type="button" value="+" onClick={this.props.onClick} />
                <input type="text" value={this.props.total} />
            </div>
        );
    }
}

const mapStateToProps = state => ({total: state.total});

const mapDispatchToProps = dispatch => ({
    onClick: () => {
        const test = Rx.Observable.of(1,2,3);
        console.log(test);
        dispatch(add());
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);