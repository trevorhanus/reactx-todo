import * as classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { deleteTodo, updateTodo } from '../actions';
import { Todo } from '../models/Todo';
import { Keys } from '../utils/Keys';

/**
 *  Here is an example of a class based React.Component with internal state. With mobx it is
 *  rare to use internal state in a Component, but there are times when it is useful. This
 *  component uses the internal state to hide and show the edit input field.
 */

export interface ITodoItemProps {
    todo: Todo;
}

export interface ITodoItemState {
    editText: string;
    editing: boolean;
}

@inject('todoStore')
@observer
export class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
    state: ITodoItemState;
    private inputRef: HTMLInputElement;

    constructor(props: ITodoItemProps) {
        super(props);
        this.state = {
            editText: '',
            editing: false,
        };
    }

    handleBlur(): void {
        const val = this.inputRef.value;
        updateTodo(this.props.todo.id, val);
        this.setState({
            editText: '',
            editing: false,
        });
    }

    handleChange(e: React.FormEvent<any>): void {
        const val = this.inputRef.value;
        this.setState({
            editText: val,
        });
    }

    handleEdit(e: React.KeyboardEvent<HTMLInputElement>): void {
        this.setState({
            editText: this.props.todo.message,
            editing: true,
        });
        setTimeout(() => {
            this.inputRef.focus();
        });
    }

    handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.keyCode !== Keys.Enter) {
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
                editing: this.state.editing,
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
        );
    }
}
