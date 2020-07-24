import React from 'react';
import s from './Post.module.css';

export const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://o-viber.ru/wp-content/uploads/2017/08/mujskie_avatarki-5.png' />
        { props.message }
          <div>
        <span>likes:</span> { props.likesCount }
      </div>
    </div>
  )
}
