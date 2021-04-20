import React from 'react'

const CommentItem = ({cm}) =>
    <div>
        <li className="list-group-item">
            {cm._id}
        </li>
    </div>

export default CommentItem