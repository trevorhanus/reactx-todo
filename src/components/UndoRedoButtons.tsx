import { Actions } from '@trevorhanus/actions';
import * as classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { findDOMNode } from 'react-dom';

const UndoRedoButtons = inject()(observer((props: {}) => {
    const canUndo = Actions.dispatcher.canUndo;
    const canRedo = Actions.dispatcher.canRedo;
    const handleUndo = () => {
        if (Actions.dispatcher.canUndo) {
            Actions.dispatcher.undo();
        }
    };
    const handleRedo = () => {
        if (Actions.dispatcher.canRedo) {
            Actions.dispatcher.redo();
        }
    };

    return (
        <div className="undo-redo-buttons">
            <button 
                className={classNames({disabled: !canUndo})}
                onClick={handleUndo}
            >
                Undo
            </button>
            <button 
                className={classNames({disabled: !canRedo})}
                onClick={handleRedo}
            >
                Redo
            </button>
        </div>
    );
}));

export {
    UndoRedoButtons,
};
