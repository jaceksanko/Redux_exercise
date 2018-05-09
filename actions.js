import uuid from 'uuid';

const   ADD_COMMENT = 'ADD_COMMENT',
        EDIT_COMMENT = 'EDIT_COMMENT',
        DEL_COMMENT = 'DEL_COMMENT',
        THUMB_UP_COMMENT = 'RATING_COMMENT_UP',
        THUMB_DOWN_COMMENT = 'RATING_COMMENT_DOWN';

function addComment(text) {
    return {
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

function thumbUpComment(id, thumb) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumb: thumb++
    }
}

function thumbDownComment(id, thumb) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumb: thumb--
    }
}

const   boundAddComment = (text) => dispatch(addComment(text)),
        boundEditComment = (text, id) => dispatch(editComment(text, id)),
        boundDelComment = (id) => dispatch(delComment(id)),
        boundThumbUpComment = (id, thumb) => dispatch(thumbUpComment(id, thumb)),
        boundThumbDownComment = (id, thumb) => dispatch(thumbDownComment(id, thumb));




