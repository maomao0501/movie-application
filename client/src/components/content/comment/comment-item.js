import React from 'react'

const CommentItem = ({comment}) =>
    <div>
        <li className="list-group-item">
            {
                comment._id
            }
            { console.log(comment) }
        </li>
    </div>

export default CommentItem