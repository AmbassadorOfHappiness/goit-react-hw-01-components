import React from 'react';
import PropTypes from 'prop-types';
import style from '../social-profile/Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className={style.profile}>
            <div>
                <img
                src={ avatar }
                alt={ name }
                className={style.avatar}
                />
                <p className={style.name}>{ name }</p>
                <p className={style.tag}>{ tag }</p>
                <p className={style.location}>{ location }</p>
            </div>

            <ul className={style.stats}>
                <li className={style.item}>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className={style.item}>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{stats.views}</span>
                </li>
                <li className={style.item}>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}
