import React, { Component } from 'react';
import Todo from './todo'
import propTypes from 'prop-types'

export default class TodoList extends Component{

    constructor(props) {
        super(props);
        if(props.error.hasError) {
            throw new Error(props.error.errorMessage);
        }
    }

    componentDidMount() {
        this.props.getTodos(this.props.list, this.props.filter)
    }

    componentDidUpdate(prevProps) {
        if(this.props.list != prevProps.list || this.props.filter!=prevProps.filter) {
          this.props.getTodos(this.props.list, this.props.filter)
        }
      }

    render() {
        return(
            <ul className="todos">
                {
                    this.props.todos.map((todo, i) => <Todo Id = {todo.id} key={todo.id} todoItem={todo}
                        {...this.props}
                        // onClick = {toggleTodo} todoItem={todo} removeTodo = {removeTodo} 
                    /> ) 
                }
            </ul>
        );
    }
}

TodoList.propTypes = {
    props: propTypes.shape({
        hasError: propTypes.bool,
        errorMessage: propTypes.string,
        todos: propTypes.array
    })
}