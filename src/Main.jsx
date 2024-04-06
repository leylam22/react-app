import React from 'react'
import style from './Main.module.css'
import Card from './Card'
import firstImg from './Screenshot 2024-04-06 235053.png'
import secondImg from './Screenshot 2024-04-06 235102.png'
import thirdImg from './Screenshot 2024-04-06 235116.png'


export default function Main() {
  return (
    <div className={style.body}>
        <Card img={firstImg} title='AI & ML based scoring' description='We determine the credit-worthiness of each client, using behavioral scoring model'/>
        <Card img={secondImg} title='Micro-lending tecnology' description='We deliver microlending solution which includines processing, disbursement, repayment, recovery and management of loans' />
        <Card img={thirdImg} title='Big data engine' description='We use latest advancements in Artificial Intelligence and Machine Learning to maximize our value proposition' />
    </div>
  )
}
