import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Issue from './Issue';
import TodoList from './TodoList';

class Root extends Component {
    // componentDidMount(){
    //     this.props.store.subscribe(
    //         () => {
    //             this.setState(this.props.store.getState());
    //         }
    //     )
    // }
    //
    render() {
        console.log(this.props.store.getState());
        return (
            <Provider store={this.props.store}>
                <div>
                    <TodoList list={this.props.store.getState().todos}/>
                    {
                        this.props.store.getState().issues.map((issue, index) => {
                            return <Issue issueId={issue.id} key={index} desc={issue.desc}/>
                        })
                    }
                </div>
            </Provider>
        )
    }
}

export default Root;