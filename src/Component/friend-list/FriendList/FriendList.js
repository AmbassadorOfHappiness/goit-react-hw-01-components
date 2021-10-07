import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={style.friendList}>
            {friends.map((friend) => 
                <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
                />
            )}
        </ul>
    );
};

