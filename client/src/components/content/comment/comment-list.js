import React from 'react'
import CommentItem from "./comment-item";

const CommentList = ({comments}) =>
    <div>
        <ul className="list-group">
            {
                comments.map((comment) =>
                    <CommentItem comment={comment}/>
                )
            }
        </ul>
    </div>

export default CommentList