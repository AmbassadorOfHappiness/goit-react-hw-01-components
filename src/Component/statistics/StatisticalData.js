import React from 'react';
import style from '../statistics/StatisticalData.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={style.statistics}>
            {title && <h2 className={ style.title }>{ title }</h2>}
            <ul className={style.statList}>
                {stats.map((stat) => (
                    <li key={stat.id} className={style.item} style={{backgroundColor: `rgba( ${random()} , ${random()} , ${random()}` }}>
                        <span className={ style.label }>{ stat.label }</span>
                        <span className={ style.percentage }>{ stat.percentage }</span>
                    </li>
                )
                )}
            </ul>
        </section>

    )
}

function random() {
  return Math.floor(Math.random() * 256);
}