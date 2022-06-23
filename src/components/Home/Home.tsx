import React, { useState } from "react"
import { useTimeout } from "usehooks-ts"
import { Preloader } from "../Preloader/Preloader"
import { Terms } from "../TermsAndConditions/Terms"
import s from "./Home.module.scss"

export const Home: React.FC = () => {
  const [visible, setVisible] = useState(true)
  useTimeout(() => {
    setVisible(false)
  }, 2000)
  return visible ? (
    <Preloader />
  ) : (
    <Terms/>
  )
}
