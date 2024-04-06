import React from 'react'
import Button from './Button'
import style from './Header.module.css'

export default function Header() {
  return (
    <>
    <div className={style.container}>
        <h1 className={style.hdr}>What we do</h1>
        <Button text='Read More' />
    </div>
    </>
  )
}
