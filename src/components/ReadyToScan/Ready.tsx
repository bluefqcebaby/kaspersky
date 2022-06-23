import React from "react"
import s from "./Ready.module.scss"
import ready from "../../img/ready.jpg"
import { useNavigate } from "react-router-dom"

export const Ready = () => {
  const redirect = useNavigate()
  const clickHandler = () => {
    redirect("/scan")
  }
  return (
    <div className={s.box}>
      <img src={ready} alt='' />
      <h1 className={s.title}>Ready to scan</h1>
      <p className={s.text}>
        Kaspersky will now run the first database update and scan installed apps.
      </p>
      <button className={s.btn} onClick={clickHandler}>
        Scan
      </button>
    </div>
  )
}
