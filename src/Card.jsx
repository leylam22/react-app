import React from 'react'
import style from './Card.module.css'

export default function Card(props) {
  return (
    <div className={style.container}>
        <img src={props.img} alt="" className={style.img} />
        <h2 className={style.title}>{props.title}</h2>
        <p className={style.description}>{props.description}</p>
    </div>
  )
}
