import React from 'react'

const CommentDetail = ({ faker }) => {
    return (
        <div>
            <div className="comment">
                <a href="/" className='avatar'>
                    <img src={faker.image.avatar()} alt="avater" />
                </a>
                <div className="content">
                    <a href="/" className='author'>Tao</a>
                    <div className="metadate">
                        <span className='date'>Today at 6:00</span>
                    </div>
                    <div className="text">Nice React</div>
                </div>
            </div>
        </div>
    )
}

export default CommentDetail

