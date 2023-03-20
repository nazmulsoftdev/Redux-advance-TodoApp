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

//  create a function for each todo id generate a new id

const nextId = (state) =>
    state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;

// create todo initialState
const initialState = [];

// create todo reducer

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return [
                ...state,
                {
                    id: nextId(state),
                    text: action.paylod,
                    complete: false,
                    yellow: false,
                    green: false,
                    red: false,
                },
            ];
        case DELETETODO:
            return state.filter((item) => item.id !== action.paylod);

        case TOGGLETODO:
            return state.map((item) =>
                item.id === action.paylod ? {...item, complete: !item.complete } :
                item
            );
        case YELLOWTOGGLE:
            return state.map((item) =>
                item.id === action.paylod ? {...item, yellow: !item.yellow, red: false, green: false } : item
            );
        case GREENTOGGLE:
            return state.map((item) =>
                item.id === action.paylod ? {...item, green: !item.green, red: false, yellow: false } : item
            );
        case REDTOGGLE:
            return state.map((item) =>
                item.id === action.paylod ? {...item, red: !item.red, green: false, yellow: false } : item
            );
        case ALLCOMPLETETODO:
            return state.map((item) => {
                return {
                    ...item,
                    complete: true,
                };
            });

        case CLEARCOMPLETETODO:
            return state.map((item) => {
                return {
                    ...item,
                    complete: false,
                    green: false,
                    red: false,
                    yellow: false
                };
            });

        default:
            return state;
    }
};

export default todoReducer;