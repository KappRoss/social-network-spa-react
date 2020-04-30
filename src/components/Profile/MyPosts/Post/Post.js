import React from 'react';
import style from'./Post.module.css';

const Post = (props) => {
    return( 
        <div className= {style.item}>
                <img src="https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg"></img>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>   
                </div>
                 
        </div>
    )
}

export default Post;