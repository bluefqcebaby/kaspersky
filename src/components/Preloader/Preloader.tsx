import React from "react"
import s from "./Preloader.module.scss"
import logo from "../../img/logo.png"
export const Preloader: React.FC = () => {
  return (
    <div className={s.box}>
      <img src={logo} alt='logo' className={s.img} />
      <p className={s.text}>Kaspersky</p>
    </div>
  )
}
