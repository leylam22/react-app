import React from 'react'
import style from './Button.module.css'

export default function Button(props) {
  return (
    <button className={style.btn} >{props.text}</button>
  )
}
