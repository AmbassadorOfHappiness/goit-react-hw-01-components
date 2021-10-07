import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
    <li className={style.friendListItem}>
      <span className={isOnline ? style.statusOn : style.statusOff}></span>
      <img className={style.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={style.friendName}>{name}</p>
    </li>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}

