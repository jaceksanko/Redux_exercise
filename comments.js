import { ADD_COMMENT, EDIT_COMMENT, DEL_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from "./actions";

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return  [{
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }, ...state.comments]
        case DEL_COMMENT:
            return  [
                    state.comments.filter(comment => comment.id !== action.id)
                    ]
        case EDIT_COMMENT:
            return  [
                    state.comments.filter(comment => comment.id !== action.id),
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }]
            
        case THUMB_UP_COMMENT:
            return [
                    state.comments.filter(comment => comment.id !== action.id),
                    {
                        id,
                        text,
                        votes: action.votes
                    }]
                    
        case THUMB_DOWN_COMMENT:
            return [
                    state.comments.filter(comment => comment.id !== action.id),
                    {
                        id,
                        text,
                        votes: action.votes
                    }]
        default: 
            return state.comments
    }
}