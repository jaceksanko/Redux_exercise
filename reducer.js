// wersja z małymi reducerami rozbitymi na comments.js i users.js
import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({ //funkcja pomocnicza Reduxa pozwalająca w prostrzy sposób łączyć ze sobą reduktory
    comments,
    users
});

/* wersja bez combineReducers

function app(state = initialState, action) {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
} */


/* wersja z jednym dużym reducerem

import { ADD_COMMENT, EDIT_COMMENT, DEL_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from "./actions";

const initialState = {
    comments: [],
    users: []
};

// ES6
function reducer(state = initialState, action) {
    switch(action.type){
        case ADD_COMMENT:
            return Object.assign({}, state, {  //metoda Object.assign tworzy nowy obiekt - {}, kopiuje do niego obiekt z aktualnym stanem - state, tworzy nowy obietkt dodając nową właściwość do comments i kopiując posostałe właściwości comments ...state
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                    , ...state]
            })
        case DEL_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id) // jak powyżej ale tym razem nowy obiekt postaje z przefiltowania state.comments tak że zawiera wszystkie komentarze poza jednym z action.id
            })
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: [state.comments.filter(comment => comment.id !== action.id),
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }]
            })
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: [state.comments.filter(comment => comment.id !== action.id),
                    {
                        id,
                        text,
                        votes: action.votes
                    }]
            })
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: [state.comments.filter(comment => comment.id !== action.id),
                    {
                        id,
                        text,
                        votes: action.votes
                    }]
            })
        default: 
            return state
    }
} */
// ES5
/* function reducer(state, action) {
    if (!state) {
        return initialState;
    }
    return state;
}; */