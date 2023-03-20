// create todo action

import {
    ADDTODO,
    ALLCOMPLETETODO,
    CLEARCOMPLETETODO,
    DELETETODO,
    GREENTOGGLE,
    REDTOGGLE,
    TOGGLETODO,
    YELLOWTOGGLE,
} from "./actionType";

/* Add new todo action */
export const AddtodoAC = (value) => {
    return {
        type: ADDTODO,
        paylod: value,
    };
};

/* Todo complete action */
export const ToggletodoAc = (todoId) => {
    return {
        type: TOGGLETODO,
        paylod: todoId,
    };
};

/* Todo delete action */
export const DeletetodoAC = (todoId) => {
    return {
        type: DELETETODO,
        paylod: todoId,
    };
};

/* Complet all todos action */
export const AllCompleteTodoAc = () => {
    return {
        type: ALLCOMPLETETODO,
    };
};

/* Complet all todos convert to Incomplete action */

export const ClearCompleteTodoAc = () => {
    return {
        type: CLEARCOMPLETETODO,
    };
};

/* Yellow Color Select */

export const YellowColorAc = (todoId) => {
    return {
        type: YELLOWTOGGLE,
        paylod: todoId,
    };
};

/* Green Color Select */
export const GreenColorAc = (todoId) => {
    return {
        type: GREENTOGGLE,
        paylod: todoId,
    };
};



/* Green Color Select */
export const RedColorAc = (todoId) => {
    return {
        type: REDTOGGLE,
        paylod: todoId,
    };
};