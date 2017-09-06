import * as React from 'react';
import * as classNames from 'classnames';
import {observer, inject} from 'mobx-react';
import {Todo} from '../models/Todo';
import {DeleteTodo} from '../actions/DeleteTodo';

export interface ITodoItemProps {
    todo: Todo;
}

export interface ITodoItemState {
    editing: boolean;
}

@inject('todoStore')
@observer
export class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
    public state: ITodoItemState;

    constructor(props: ITodoItemProps) {
        super(props)
        this.state = {
            editing: false
        }
    }

    onDestroy(): void {
        const {todo} = this.props;
        const deleteTodo = new DeleteTodo({id: todo.id});
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
                    <label onDoubleClick={ e => this.handleEdit() }>
                        {todo.message}
                    </label>
                    <button className="destroy" onClick={this.onDestroy.bind(this)} />
                </div>
                <input
                    ref="editField"
                    className="edit"
                    value={this.state.editText}
                    onBlur={ e => this.handleSubmit(e) }
                    onChange={ e => this.handleChange(e) }
                    onKeyDown={ e => this.handleKeyDown(e) }
                />
            </li>
        )
    }
}
