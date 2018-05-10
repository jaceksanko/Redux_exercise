import uuid from 'uuid';

export const   ADD_COMMENT = 'ADD_COMMENT',
               EDIT_COMMENT = 'EDIT_COMMENT',
               DEL_COMMENT = 'DEL_COMMENT',
               THUMB_UP_COMMENT = 'RATING_COMMENT_UP',
               THUMB_DOWN_COMMENT = 'RATING_COMMENT_DOWN';


//kreator akcji
function addComment(text) {
    return { //akcja
        type: ADD_COMMENT,
        text,
        id: uuidv4()
    }
};

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function delComment(id) {
    return {
        type: DEL_COMMENT,
        id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: votes + 1
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: votes - 1
    }
}

//bound action creator - tworzy i wysyła akcję za pomocą metody dispatch 
const   boundAddComment = (text) => dispatch(addComment(text)),
        boundEditComment = (text, id) => dispatch(editComment(text, id)),
        boundDelComment = (id) => dispatch(delComment(id)),
        boundThumbUpComment = (id) => dispatch(thumbUpComment(id)),
        boundThumbDownComment = (id) => dispatch(thumbDownComment(id));

//przykład wywołania akcji
//boundAddComment('nowy komentarz');
//boundAddComment('Kolejny komentarz');
//boundEditComment('Wyedytowany komentarz', 20);


