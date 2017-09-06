import {observable, computed, action} from 'mobx';

export interface ITodo {
    id: string;
    message: string;
}

export class Todo {
    private _id: string;
    @observable private _done: boolean;
    @observable private _message: string;

    constructor(id: string, message: string) {
        this._id = id;
        this._done = false;
        this._message = message;
    }

    @computed
    get completed(): boolean {
        return this._done;
    }

    get id(): string {
        return this._id;
    }

    @computed
    get message(): string {
        return this._message;
    }

    @action
    toggle(): void {
        this._done = !this._done;
    }

    @action
    setMessage(message: string): void {
        this._message = message;
    }
}
