import * as React from 'react';
import * as classNames from 'classnames';
import {observer, inject} from 'mobx-react';
import {Todo} from '../models/Todo';
import {deleteTodo} from '../actions';
import {updateTodo} from '../actions';

/*
    Here is an example of a class based React.Component with internal state. With mobx it is
    rare to use internal state in a Component, but there are times when it is useful. This 
    component uses the internal state to hide and show the edit input field.
*/

export interface ITodoItemProps {
    todo: Todo;
}

export interface ITodoItemState {
    editing: boolean;
    editText: string;
}

@inject('todoStore')
@observer
export class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
    public state: ITodoItemState;
    private inputRef: HTMLInputElement;

    constructor(props: ITodoItemProps) {
        super(props)
        this.state = {
            editing: false,
            editText: ''
        }
    }

    handleBlur(): void {
        const val = this.inputRef.value;
        updateTodo(this.props.todo.id, val);
        this.setState({
            editing: false,
            editText: ''
        });
    }

    handleChange(e: React.FormEvent<any>): void {
        const val = this.inputRef.value;
        this.setState({
            editText: val
        });
    }

    handleEdit(e: React.KeyboardEvent<HTMLInputElement>): void {
        this.setState({
            editing: true,
            editText: this.props.todo.message
        });
        setTimeout(() => {
            this.inputRef.focus();
        });
    }

    handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.keyCode !== 13) {
            return;
        }

        event.preventDefault();
        this.inputRef.blur();
    }

    onDestroy(): void {
        const {todo} = this.props;
        deleteTodo(todo.id);
    }

    onToggle(): void {
        this.props.todo.toggle();
    }

    render() {
        const {todo} = this.props;
        
        return (
            <li className={classNames({
                completed: todo.completed,
                editing: this.state.editing
            })}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={this.onToggle.bind(this)}
                    />
                    <label onDoubleClick={this.handleEdit.bind(this)}>
                        {todo.message}
                    </label>
                    <button className="destroy" onClick={this.onDestroy.bind(this)} />
                </div>
                <input
                    ref={input => this.inputRef = input}
                    className="edit"
                    value={this.state.editText}
                    onBlur={this.handleBlur.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                />
            </li>
        )
    }
}
