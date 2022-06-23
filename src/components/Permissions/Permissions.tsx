import React from "react"
import s from "./Permissons.module.scss"
import file from "../../img/file.svg"
import { useNavigate } from "react-router-dom"

export const Permissions = () => {
  const redirect = useNavigate()
  const clickHandler = () => {
    redirect("/ready")
  }
  return (
    <div className={s.box}>
      <h1 className={s.title}>
        To work properly, the app needs access to these system features:
      </h1>
      <div className={s.feature}>
        <img src={file} alt='file' className={s.file} />
        <div className={s.text_block}>
          <h3 className={s.text_title}>Access to storage</h3>
          <p className={s.text_regular}>
            Required to scan your device for malicious files.
          </p>
        </div>
      </div>
      <button className={s.btn} onClick={clickHandler}>
        Next
      </button>
    </div>
  )
}
